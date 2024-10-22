import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation signUp($data: UserCreateInput!) {
    signUp(data: $data) {
      name
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation refreshToken($refreshToken: String!) {
    refreshToken(refreshToken: $refreshToken)
  }
`;

export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      accessToken
      refreshToken
      user {
        id
        email
        phone
        dateOfBirth
        name
        role
        verification
        restaurant {
          id
          name
          location
          operatingHours
          menu {
            id
            name
            description
            category
            price
            picture
          }

          orders {
            id
            customerId
            totalPrice
            deliveryAddress
            deliveryPerson
            deliveryTime
            status
            createdAt
            foods
          }
        }
      }
    }
  }
`;

export const VERIFY_ACCOUNT = gql`
  mutation verifyAccount($email: String!, $otp: String!) {
    verifyAccount(email: $email, otp: $otp)
  }
`;

export const REQUEST_OTP = gql`
  mutation requestOtp($email: String!, $type: String!) {
    requestOtp(email: $email, type: $type)
  }
`;
export const RESET_PASSWORD = gql`
  mutation resetPassword($email: String!, $otp: String!, $password: String!) {
    resetPassword(otp: $otp, password: $password, email: $email)
  }
`;

export const GET_CURRENT_USER = gql`
  query getCurrentUser {
    getCurrentUser {
      dateOfBirth
      name
      id
      email
      phone
      role
      verification
      restaurant {
        id
        name
        location
        operatingHours
        menu {
          id
          name
          description
          category
          price
          picture
        }

        orders {
          id
          customerId
          totalPrice
          deliveryAddress
          deliveryPerson
          deliveryTime
          status
          createdAt
          foods
        }
      }
    }
  }
`;

export const FETCH_FOODS = gql`
  query fetchFoods($category: String) {
    fetchFoods(category: $category) {
      id
      name
      description
      category
      price
      picture
      restaurantId
    }
  }
`;

export const FETCH_ORDERS = gql`
  query fetchOrders($status: String) {
    fetchOrders(status: $status) {
      id
      totalPrice
      foods
      status
      deliveryPerson
      deliveryTime
      customerId
      restaurantId
      deliveryAddress
      createdAt
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword($password: String!, $newPassword: String!) {
    changePassword(password: $password, newPassword: $newPassword)
  }
`;
