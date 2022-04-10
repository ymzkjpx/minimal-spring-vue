<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {UserListInitValue, UserListType} from "@/pages/userlist/UserListInterface";
import {axiosClient} from "@/plugins/axios";

onMounted(()=>
    fetchUserList()
)

const userList = reactive<{value: UserListType}>({
  value: UserListInitValue
})
const message = ref()

const fetchUserList = () => {
  const url = '/'
  axiosClient.get(url).then((response)=>{
    console.log(response)
    message.value = response.data
  })
}

</script>

<template>
  <h2>UserList</h2>
  <div>
    <p>{{message}}</p>
<!--    <article>-->
<!--      <header>-->
<!--        <h2>ユーザー一覧</h2>-->
<!--      </header>-->
<!--      <main>-->
<!--        <table>-->
<!--          <tr>-->
<!--            <th>ユーザーID</th>-->
<!--            <th>名前</th>-->
<!--            <th>年齢</th>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td>1</td>-->
<!--            <td>Alice</td>-->
<!--            <td>20</td>-->
<!--          </tr>-->
<!--        </table>-->
<!--      </main>-->
<!--    </article>-->
  </div>
</template>
