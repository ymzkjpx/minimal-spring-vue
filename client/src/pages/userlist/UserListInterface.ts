export interface UserListType {
    'userId': string,
    'name': string,
    'age'?: number | null
}

export const UserListInitValue: UserListType={
    userId: '',
    name:'',
    age: null
}
