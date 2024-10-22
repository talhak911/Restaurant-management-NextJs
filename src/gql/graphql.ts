/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type CustomerCountOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
};

export type CustomerCreateInput = {
  address?: InputMaybe<CustomerCreateaddressInput>;
  cart?: InputMaybe<OrderItemCartCreateNestedManyWithoutCustomerInput>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutCustomerInput>;
  picture?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutCustomerInput;
};

export type CustomerCreateManyInput = {
  address?: InputMaybe<CustomerCreateaddressInput>;
  id: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerCreateNestedOneWithoutCartInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutCartInput>;
  create?: InputMaybe<CustomerCreateWithoutCartInput>;
};

export type CustomerCreateNestedOneWithoutOrdersInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutOrdersInput>;
  create?: InputMaybe<CustomerCreateWithoutOrdersInput>;
};

export type CustomerCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<CustomerCreateWithoutUserInput>;
};

export type CustomerCreateOrConnectWithoutCartInput = {
  create: CustomerCreateWithoutCartInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerCreateOrConnectWithoutOrdersInput = {
  create: CustomerCreateWithoutOrdersInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerCreateOrConnectWithoutUserInput = {
  create: CustomerCreateWithoutUserInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerCreateWithoutCartInput = {
  address?: InputMaybe<CustomerCreateaddressInput>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutCustomerInput>;
  picture?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutCustomerInput;
};

export type CustomerCreateWithoutOrdersInput = {
  address?: InputMaybe<CustomerCreateaddressInput>;
  cart?: InputMaybe<OrderItemCartCreateNestedManyWithoutCustomerInput>;
  picture?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutCustomerInput;
};

export type CustomerCreateWithoutUserInput = {
  address?: InputMaybe<CustomerCreateaddressInput>;
  cart?: InputMaybe<OrderItemCartCreateNestedManyWithoutCustomerInput>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutCustomerInput>;
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerCreateaddressInput = {
  set: Array<Scalars['JSON']['input']>;
};

export type CustomerMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
};

export type CustomerMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
};

export type CustomerNullableRelationFilter = {
  is?: InputMaybe<CustomerWhereInput>;
  isNot?: InputMaybe<CustomerWhereInput>;
};

export type CustomerOrderByWithAggregationInput = {
  _count?: InputMaybe<CustomerCountOrderByAggregateInput>;
  _max?: InputMaybe<CustomerMaxOrderByAggregateInput>;
  _min?: InputMaybe<CustomerMinOrderByAggregateInput>;
  address?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrderInput>;
};

export type CustomerOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  cart?: InputMaybe<OrderItemCartOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  orders?: InputMaybe<OrderOrderByRelationAggregateInput>;
  picture?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type CustomerRelationFilter = {
  is?: InputMaybe<CustomerWhereInput>;
  isNot?: InputMaybe<CustomerWhereInput>;
};

export enum CustomerScalarFieldEnum {
  Address = 'address',
  Id = 'id',
  Picture = 'picture'
}

export type CustomerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<JsonNullableListFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  picture?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type CustomerUpdateInput = {
  address?: InputMaybe<CustomerUpdateaddressInput>;
  cart?: InputMaybe<OrderItemCartUpdateManyWithoutCustomerNestedInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutCustomerNestedInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCustomerNestedInput>;
};

export type CustomerUpdateManyMutationInput = {
  address?: InputMaybe<CustomerUpdateaddressInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CustomerUpdateOneRequiredWithoutCartNestedInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutCartInput>;
  create?: InputMaybe<CustomerCreateWithoutCartInput>;
  update?: InputMaybe<CustomerUpdateToOneWithWhereWithoutCartInput>;
  upsert?: InputMaybe<CustomerUpsertWithoutCartInput>;
};

export type CustomerUpdateOneRequiredWithoutOrdersNestedInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutOrdersInput>;
  create?: InputMaybe<CustomerCreateWithoutOrdersInput>;
  update?: InputMaybe<CustomerUpdateToOneWithWhereWithoutOrdersInput>;
  upsert?: InputMaybe<CustomerUpsertWithoutOrdersInput>;
};

export type CustomerUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<CustomerCreateWithoutUserInput>;
  delete?: InputMaybe<CustomerWhereInput>;
  disconnect?: InputMaybe<CustomerWhereInput>;
  update?: InputMaybe<CustomerUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<CustomerUpsertWithoutUserInput>;
};

export type CustomerUpdateToOneWithWhereWithoutCartInput = {
  data: CustomerUpdateWithoutCartInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
  data: CustomerUpdateWithoutOrdersInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpdateToOneWithWhereWithoutUserInput = {
  data: CustomerUpdateWithoutUserInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpdateWithoutCartInput = {
  address?: InputMaybe<CustomerUpdateaddressInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutCustomerNestedInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCustomerNestedInput>;
};

export type CustomerUpdateWithoutOrdersInput = {
  address?: InputMaybe<CustomerUpdateaddressInput>;
  cart?: InputMaybe<OrderItemCartUpdateManyWithoutCustomerNestedInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCustomerNestedInput>;
};

export type CustomerUpdateWithoutUserInput = {
  address?: InputMaybe<CustomerUpdateaddressInput>;
  cart?: InputMaybe<OrderItemCartUpdateManyWithoutCustomerNestedInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutCustomerNestedInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type CustomerUpdateaddressInput = {
  push?: InputMaybe<Array<Scalars['JSON']['input']>>;
  set?: InputMaybe<Array<Scalars['JSON']['input']>>;
};

export type CustomerUpsertWithoutCartInput = {
  create: CustomerCreateWithoutCartInput;
  update: CustomerUpdateWithoutCartInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpsertWithoutOrdersInput = {
  create: CustomerCreateWithoutOrdersInput;
  update: CustomerUpdateWithoutOrdersInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpsertWithoutUserInput = {
  create: CustomerCreateWithoutUserInput;
  update: CustomerUpdateWithoutUserInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerWhereInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  address?: InputMaybe<JsonNullableListFilter>;
  cart?: InputMaybe<OrderItemCartListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  orders?: InputMaybe<OrderListRelationFilter>;
  picture?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type CustomerWhereUniqueInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  address?: InputMaybe<JsonNullableListFilter>;
  cart?: InputMaybe<OrderItemCartListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<OrderListRelationFilter>;
  picture?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type EnumFoodCategoryFieldUpdateOperationsInput = {
  set?: InputMaybe<FoodCategory>;
};

export type EnumFoodCategoryFilter = {
  equals?: InputMaybe<FoodCategory>;
  in?: InputMaybe<Array<FoodCategory>>;
  not?: InputMaybe<NestedEnumFoodCategoryFilter>;
  notIn?: InputMaybe<Array<FoodCategory>>;
};

export type EnumFoodCategoryWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumFoodCategoryFilter>;
  _min?: InputMaybe<NestedEnumFoodCategoryFilter>;
  equals?: InputMaybe<FoodCategory>;
  in?: InputMaybe<Array<FoodCategory>>;
  not?: InputMaybe<NestedEnumFoodCategoryWithAggregatesFilter>;
  notIn?: InputMaybe<Array<FoodCategory>>;
};

export type EnumOrderStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<OrderStatus>;
};

export type EnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type EnumOrderStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumOrderStatusFilter>;
  _min?: InputMaybe<NestedEnumOrderStatusFilter>;
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FoodAvgOrderByAggregateInput = {
  price?: InputMaybe<SortOrder>;
};

export enum FoodCategory {
  Dessert = 'DESSERT',
  Drinks = 'DRINKS',
  Meal = 'MEAL',
  Snacks = 'SNACKS',
  Vegan = 'VEGAN'
}

export type FoodCountOrderByAggregateInput = {
  category?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  restaurantId?: InputMaybe<SortOrder>;
};

export type FoodCreateInput = {
  carts?: InputMaybe<OrderItemCartCreateNestedManyWithoutFoodInput>;
  category: FoodCategory;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  restaurant: RestaurantCreateNestedOneWithoutMenuInput;
};

export type FoodCreateManyInput = {
  category: FoodCategory;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  restaurantId: Scalars['String']['input'];
};

export type FoodCreateManyRestaurantInput = {
  category: FoodCategory;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
};

export type FoodCreateManyRestaurantInputEnvelope = {
  data: Array<FoodCreateManyRestaurantInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FoodCreateNestedManyWithoutRestaurantInput = {
  connect?: InputMaybe<Array<FoodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodCreateOrConnectWithoutRestaurantInput>>;
  create?: InputMaybe<Array<FoodCreateWithoutRestaurantInput>>;
  createMany?: InputMaybe<FoodCreateManyRestaurantInputEnvelope>;
};

export type FoodCreateNestedOneWithoutCartsInput = {
  connect?: InputMaybe<FoodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCreateOrConnectWithoutCartsInput>;
  create?: InputMaybe<FoodCreateWithoutCartsInput>;
};

export type FoodCreateOrConnectWithoutCartsInput = {
  create: FoodCreateWithoutCartsInput;
  where: FoodWhereUniqueInput;
};

export type FoodCreateOrConnectWithoutRestaurantInput = {
  create: FoodCreateWithoutRestaurantInput;
  where: FoodWhereUniqueInput;
};

export type FoodCreateWithoutCartsInput = {
  category: FoodCategory;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  restaurant: RestaurantCreateNestedOneWithoutMenuInput;
};

export type FoodCreateWithoutRestaurantInput = {
  carts?: InputMaybe<OrderItemCartCreateNestedManyWithoutFoodInput>;
  category: FoodCategory;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  picture?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
};

export type FoodListRelationFilter = {
  every?: InputMaybe<FoodWhereInput>;
  none?: InputMaybe<FoodWhereInput>;
  some?: InputMaybe<FoodWhereInput>;
};

export type FoodMaxOrderByAggregateInput = {
  category?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  restaurantId?: InputMaybe<SortOrder>;
};

export type FoodMinOrderByAggregateInput = {
  category?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  restaurantId?: InputMaybe<SortOrder>;
};

export type FoodOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FoodOrderByWithAggregationInput = {
  _avg?: InputMaybe<FoodAvgOrderByAggregateInput>;
  _count?: InputMaybe<FoodCountOrderByAggregateInput>;
  _max?: InputMaybe<FoodMaxOrderByAggregateInput>;
  _min?: InputMaybe<FoodMinOrderByAggregateInput>;
  _sum?: InputMaybe<FoodSumOrderByAggregateInput>;
  category?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrderInput>;
  price?: InputMaybe<SortOrder>;
  restaurantId?: InputMaybe<SortOrder>;
};

export type FoodOrderByWithRelationInput = {
  carts?: InputMaybe<OrderItemCartOrderByRelationAggregateInput>;
  category?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrderInput>;
  price?: InputMaybe<SortOrder>;
  restaurant?: InputMaybe<RestaurantOrderByWithRelationInput>;
  restaurantId?: InputMaybe<SortOrder>;
};

export type FoodRelationFilter = {
  is?: InputMaybe<FoodWhereInput>;
  isNot?: InputMaybe<FoodWhereInput>;
};

export enum FoodScalarFieldEnum {
  Category = 'category',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Picture = 'picture',
  Price = 'price',
  RestaurantId = 'restaurantId'
}

export type FoodScalarWhereInput = {
  AND?: InputMaybe<Array<FoodScalarWhereInput>>;
  NOT?: InputMaybe<Array<FoodScalarWhereInput>>;
  OR?: InputMaybe<Array<FoodScalarWhereInput>>;
  category?: InputMaybe<EnumFoodCategoryFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  picture?: InputMaybe<StringNullableFilter>;
  price?: InputMaybe<FloatFilter>;
  restaurantId?: InputMaybe<StringFilter>;
};

export type FoodScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FoodScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FoodScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FoodScalarWhereWithAggregatesInput>>;
  category?: InputMaybe<EnumFoodCategoryWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  picture?: InputMaybe<StringNullableWithAggregatesFilter>;
  price?: InputMaybe<FloatWithAggregatesFilter>;
  restaurantId?: InputMaybe<StringWithAggregatesFilter>;
};

export type FoodSumOrderByAggregateInput = {
  price?: InputMaybe<SortOrder>;
};

export type FoodUpdateInput = {
  carts?: InputMaybe<OrderItemCartUpdateManyWithoutFoodNestedInput>;
  category?: InputMaybe<EnumFoodCategoryFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  restaurant?: InputMaybe<RestaurantUpdateOneRequiredWithoutMenuNestedInput>;
};

export type FoodUpdateManyMutationInput = {
  category?: InputMaybe<EnumFoodCategoryFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type FoodUpdateManyWithWhereWithoutRestaurantInput = {
  data: FoodUpdateManyMutationInput;
  where: FoodScalarWhereInput;
};

export type FoodUpdateManyWithoutRestaurantNestedInput = {
  connect?: InputMaybe<Array<FoodWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FoodCreateOrConnectWithoutRestaurantInput>>;
  create?: InputMaybe<Array<FoodCreateWithoutRestaurantInput>>;
  createMany?: InputMaybe<FoodCreateManyRestaurantInputEnvelope>;
  delete?: InputMaybe<Array<FoodWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FoodScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FoodWhereUniqueInput>>;
  set?: InputMaybe<Array<FoodWhereUniqueInput>>;
  update?: InputMaybe<Array<FoodUpdateWithWhereUniqueWithoutRestaurantInput>>;
  updateMany?: InputMaybe<Array<FoodUpdateManyWithWhereWithoutRestaurantInput>>;
  upsert?: InputMaybe<Array<FoodUpsertWithWhereUniqueWithoutRestaurantInput>>;
};

export type FoodUpdateOneRequiredWithoutCartsNestedInput = {
  connect?: InputMaybe<FoodWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FoodCreateOrConnectWithoutCartsInput>;
  create?: InputMaybe<FoodCreateWithoutCartsInput>;
  update?: InputMaybe<FoodUpdateToOneWithWhereWithoutCartsInput>;
  upsert?: InputMaybe<FoodUpsertWithoutCartsInput>;
};

export type FoodUpdateToOneWithWhereWithoutCartsInput = {
  data: FoodUpdateWithoutCartsInput;
  where?: InputMaybe<FoodWhereInput>;
};

export type FoodUpdateWithWhereUniqueWithoutRestaurantInput = {
  data: FoodUpdateWithoutRestaurantInput;
  where: FoodWhereUniqueInput;
};

export type FoodUpdateWithoutCartsInput = {
  category?: InputMaybe<EnumFoodCategoryFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
  restaurant?: InputMaybe<RestaurantUpdateOneRequiredWithoutMenuNestedInput>;
};

export type FoodUpdateWithoutRestaurantInput = {
  carts?: InputMaybe<OrderItemCartUpdateManyWithoutFoodNestedInput>;
  category?: InputMaybe<EnumFoodCategoryFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  price?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type FoodUpsertWithWhereUniqueWithoutRestaurantInput = {
  create: FoodCreateWithoutRestaurantInput;
  update: FoodUpdateWithoutRestaurantInput;
  where: FoodWhereUniqueInput;
};

export type FoodUpsertWithoutCartsInput = {
  create: FoodCreateWithoutCartsInput;
  update: FoodUpdateWithoutCartsInput;
  where?: InputMaybe<FoodWhereInput>;
};

export type FoodWhereInput = {
  AND?: InputMaybe<Array<FoodWhereInput>>;
  NOT?: InputMaybe<Array<FoodWhereInput>>;
  OR?: InputMaybe<Array<FoodWhereInput>>;
  carts?: InputMaybe<OrderItemCartListRelationFilter>;
  category?: InputMaybe<EnumFoodCategoryFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  picture?: InputMaybe<StringNullableFilter>;
  price?: InputMaybe<FloatFilter>;
  restaurant?: InputMaybe<RestaurantRelationFilter>;
  restaurantId?: InputMaybe<StringFilter>;
};

export type FoodWhereUniqueInput = {
  AND?: InputMaybe<Array<FoodWhereInput>>;
  NOT?: InputMaybe<Array<FoodWhereInput>>;
  OR?: InputMaybe<Array<FoodWhereInput>>;
  carts?: InputMaybe<OrderItemCartListRelationFilter>;
  category?: InputMaybe<EnumFoodCategoryFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  picture?: InputMaybe<StringNullableFilter>;
  price?: InputMaybe<FloatFilter>;
  restaurant?: InputMaybe<RestaurantRelationFilter>;
  restaurantId?: InputMaybe<StringFilter>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type JsonNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['JSON']['input']>>;
  has?: InputMaybe<Scalars['JSON']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['JSON']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['JSON']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JsonWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedJsonFilter>;
  _min?: InputMaybe<NestedJsonFilter>;
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedEnumFoodCategoryFilter = {
  equals?: InputMaybe<FoodCategory>;
  in?: InputMaybe<Array<FoodCategory>>;
  not?: InputMaybe<NestedEnumFoodCategoryFilter>;
  notIn?: InputMaybe<Array<FoodCategory>>;
};

export type NestedEnumFoodCategoryWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumFoodCategoryFilter>;
  _min?: InputMaybe<NestedEnumFoodCategoryFilter>;
  equals?: InputMaybe<FoodCategory>;
  in?: InputMaybe<Array<FoodCategory>>;
  not?: InputMaybe<NestedEnumFoodCategoryWithAggregatesFilter>;
  notIn?: InputMaybe<Array<FoodCategory>>;
};

export type NestedEnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type NestedEnumOrderStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumOrderStatusFilter>;
  _min?: InputMaybe<NestedEnumOrderStatusFilter>;
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedJsonFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type OrderAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  deliveryAddress?: InputMaybe<SortOrder>;
  deliveryPerson?: InputMaybe<SortOrder>;
  deliveryTime?: InputMaybe<SortOrder>;
  foods?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  restaurantId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  customer: CustomerCreateNestedOneWithoutOrdersInput;
  deliveryAddress: Scalars['String']['input'];
  deliveryPerson?: InputMaybe<Scalars['String']['input']>;
  deliveryTime?: InputMaybe<Scalars['DateTimeISO']['input']>;
  foods: Scalars['JSON']['input'];
  restaurant: RestaurantCreateNestedOneWithoutOrdersInput;
  status?: InputMaybe<OrderStatus>;
  totalPrice: Scalars['Float']['input'];
};

export type OrderCreateManyCustomerInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deliveryAddress: Scalars['String']['input'];
  deliveryPerson?: InputMaybe<Scalars['String']['input']>;
  deliveryTime?: InputMaybe<Scalars['DateTimeISO']['input']>;
  foods: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  restaurantId: Scalars['String']['input'];
  status?: InputMaybe<OrderStatus>;
  totalPrice: Scalars['Float']['input'];
};

export type OrderCreateManyCustomerInputEnvelope = {
  data: Array<OrderCreateManyCustomerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  customerId: Scalars['String']['input'];
  deliveryAddress: Scalars['String']['input'];
  deliveryPerson?: InputMaybe<Scalars['String']['input']>;
  deliveryTime?: InputMaybe<Scalars['DateTimeISO']['input']>;
  foods: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  restaurantId: Scalars['String']['input'];
  status?: InputMaybe<OrderStatus>;
  totalPrice: Scalars['Float']['input'];
};

export type OrderCreateManyRestaurantInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  customerId: Scalars['String']['input'];
  deliveryAddress: Scalars['String']['input'];
  deliveryPerson?: InputMaybe<Scalars['String']['input']>;
  deliveryTime?: InputMaybe<Scalars['DateTimeISO']['input']>;
  foods: Scalars['JSON']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<OrderStatus>;
  totalPrice: Scalars['Float']['input'];
};

export type OrderCreateManyRestaurantInputEnvelope = {
  data: Array<OrderCreateManyRestaurantInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderCreateNestedManyWithoutCustomerInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutCustomerInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<OrderCreateManyCustomerInputEnvelope>;
};

export type OrderCreateNestedManyWithoutRestaurantInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutRestaurantInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutRestaurantInput>>;
  createMany?: InputMaybe<OrderCreateManyRestaurantInputEnvelope>;
};

export type OrderCreateOrConnectWithoutCustomerInput = {
  create: OrderCreateWithoutCustomerInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateOrConnectWithoutRestaurantInput = {
  create: OrderCreateWithoutRestaurantInput;
  where: OrderWhereUniqueInput;
};

export type OrderCreateWithoutCustomerInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  deliveryAddress: Scalars['String']['input'];
  deliveryPerson?: InputMaybe<Scalars['String']['input']>;
  deliveryTime?: InputMaybe<Scalars['DateTimeISO']['input']>;
  foods: Scalars['JSON']['input'];
  restaurant: RestaurantCreateNestedOneWithoutOrdersInput;
  status?: InputMaybe<OrderStatus>;
  totalPrice: Scalars['Float']['input'];
};

export type OrderCreateWithoutRestaurantInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  customer: CustomerCreateNestedOneWithoutOrdersInput;
  deliveryAddress: Scalars['String']['input'];
  deliveryPerson?: InputMaybe<Scalars['String']['input']>;
  deliveryTime?: InputMaybe<Scalars['DateTimeISO']['input']>;
  foods: Scalars['JSON']['input'];
  status?: InputMaybe<OrderStatus>;
  totalPrice: Scalars['Float']['input'];
};

export type OrderItemCartAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemCartCountOrderByAggregateInput = {
  customerId?: InputMaybe<SortOrder>;
  foodId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemCartCreateInput = {
  customer: CustomerCreateNestedOneWithoutCartInput;
  food: FoodCreateNestedOneWithoutCartsInput;
  quantity: Scalars['Int']['input'];
  totalPrice: Scalars['Float']['input'];
};

export type OrderItemCartCreateManyCustomerInput = {
  foodId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  quantity: Scalars['Int']['input'];
  totalPrice: Scalars['Float']['input'];
};

export type OrderItemCartCreateManyCustomerInputEnvelope = {
  data: Array<OrderItemCartCreateManyCustomerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderItemCartCreateManyFoodInput = {
  customerId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  quantity: Scalars['Int']['input'];
  totalPrice: Scalars['Float']['input'];
};

export type OrderItemCartCreateManyFoodInputEnvelope = {
  data: Array<OrderItemCartCreateManyFoodInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderItemCartCreateManyInput = {
  customerId: Scalars['String']['input'];
  foodId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  quantity: Scalars['Int']['input'];
  totalPrice: Scalars['Float']['input'];
};

export type OrderItemCartCreateNestedManyWithoutCustomerInput = {
  connect?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemCartCreateOrConnectWithoutCustomerInput>>;
  create?: InputMaybe<Array<OrderItemCartCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<OrderItemCartCreateManyCustomerInputEnvelope>;
};

export type OrderItemCartCreateNestedManyWithoutFoodInput = {
  connect?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemCartCreateOrConnectWithoutFoodInput>>;
  create?: InputMaybe<Array<OrderItemCartCreateWithoutFoodInput>>;
  createMany?: InputMaybe<OrderItemCartCreateManyFoodInputEnvelope>;
};

export type OrderItemCartCreateOrConnectWithoutCustomerInput = {
  create: OrderItemCartCreateWithoutCustomerInput;
  where: OrderItemCartWhereUniqueInput;
};

export type OrderItemCartCreateOrConnectWithoutFoodInput = {
  create: OrderItemCartCreateWithoutFoodInput;
  where: OrderItemCartWhereUniqueInput;
};

export type OrderItemCartCreateWithoutCustomerInput = {
  food: FoodCreateNestedOneWithoutCartsInput;
  quantity: Scalars['Int']['input'];
  totalPrice: Scalars['Float']['input'];
};

export type OrderItemCartCreateWithoutFoodInput = {
  customer: CustomerCreateNestedOneWithoutCartInput;
  quantity: Scalars['Int']['input'];
  totalPrice: Scalars['Float']['input'];
};

export type OrderItemCartListRelationFilter = {
  every?: InputMaybe<OrderItemCartWhereInput>;
  none?: InputMaybe<OrderItemCartWhereInput>;
  some?: InputMaybe<OrderItemCartWhereInput>;
};

export type OrderItemCartMaxOrderByAggregateInput = {
  customerId?: InputMaybe<SortOrder>;
  foodId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemCartMinOrderByAggregateInput = {
  customerId?: InputMaybe<SortOrder>;
  foodId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemCartOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrderItemCartOrderByWithAggregationInput = {
  _avg?: InputMaybe<OrderItemCartAvgOrderByAggregateInput>;
  _count?: InputMaybe<OrderItemCartCountOrderByAggregateInput>;
  _max?: InputMaybe<OrderItemCartMaxOrderByAggregateInput>;
  _min?: InputMaybe<OrderItemCartMinOrderByAggregateInput>;
  _sum?: InputMaybe<OrderItemCartSumOrderByAggregateInput>;
  customerId?: InputMaybe<SortOrder>;
  foodId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemCartOrderByWithRelationInput = {
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  food?: InputMaybe<FoodOrderByWithRelationInput>;
  foodId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export enum OrderItemCartScalarFieldEnum {
  CustomerId = 'customerId',
  FoodId = 'foodId',
  Id = 'id',
  Quantity = 'quantity',
  TotalPrice = 'totalPrice'
}

export type OrderItemCartScalarWhereInput = {
  AND?: InputMaybe<Array<OrderItemCartScalarWhereInput>>;
  NOT?: InputMaybe<Array<OrderItemCartScalarWhereInput>>;
  OR?: InputMaybe<Array<OrderItemCartScalarWhereInput>>;
  customerId?: InputMaybe<StringFilter>;
  foodId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  quantity?: InputMaybe<IntFilter>;
  totalPrice?: InputMaybe<FloatFilter>;
};

export type OrderItemCartScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OrderItemCartScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OrderItemCartScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OrderItemCartScalarWhereWithAggregatesInput>>;
  customerId?: InputMaybe<StringWithAggregatesFilter>;
  foodId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  quantity?: InputMaybe<IntWithAggregatesFilter>;
  totalPrice?: InputMaybe<FloatWithAggregatesFilter>;
};

export type OrderItemCartSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderItemCartUpdateInput = {
  customer?: InputMaybe<CustomerUpdateOneRequiredWithoutCartNestedInput>;
  food?: InputMaybe<FoodUpdateOneRequiredWithoutCartsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type OrderItemCartUpdateManyMutationInput = {
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type OrderItemCartUpdateManyWithWhereWithoutCustomerInput = {
  data: OrderItemCartUpdateManyMutationInput;
  where: OrderItemCartScalarWhereInput;
};

export type OrderItemCartUpdateManyWithWhereWithoutFoodInput = {
  data: OrderItemCartUpdateManyMutationInput;
  where: OrderItemCartScalarWhereInput;
};

export type OrderItemCartUpdateManyWithoutCustomerNestedInput = {
  connect?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemCartCreateOrConnectWithoutCustomerInput>>;
  create?: InputMaybe<Array<OrderItemCartCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<OrderItemCartCreateManyCustomerInputEnvelope>;
  delete?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderItemCartScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderItemCartUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: InputMaybe<Array<OrderItemCartUpdateManyWithWhereWithoutCustomerInput>>;
  upsert?: InputMaybe<Array<OrderItemCartUpsertWithWhereUniqueWithoutCustomerInput>>;
};

export type OrderItemCartUpdateManyWithoutFoodNestedInput = {
  connect?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderItemCartCreateOrConnectWithoutFoodInput>>;
  create?: InputMaybe<Array<OrderItemCartCreateWithoutFoodInput>>;
  createMany?: InputMaybe<OrderItemCartCreateManyFoodInputEnvelope>;
  delete?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderItemCartScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderItemCartWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderItemCartUpdateWithWhereUniqueWithoutFoodInput>>;
  updateMany?: InputMaybe<Array<OrderItemCartUpdateManyWithWhereWithoutFoodInput>>;
  upsert?: InputMaybe<Array<OrderItemCartUpsertWithWhereUniqueWithoutFoodInput>>;
};

export type OrderItemCartUpdateWithWhereUniqueWithoutCustomerInput = {
  data: OrderItemCartUpdateWithoutCustomerInput;
  where: OrderItemCartWhereUniqueInput;
};

export type OrderItemCartUpdateWithWhereUniqueWithoutFoodInput = {
  data: OrderItemCartUpdateWithoutFoodInput;
  where: OrderItemCartWhereUniqueInput;
};

export type OrderItemCartUpdateWithoutCustomerInput = {
  food?: InputMaybe<FoodUpdateOneRequiredWithoutCartsNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type OrderItemCartUpdateWithoutFoodInput = {
  customer?: InputMaybe<CustomerUpdateOneRequiredWithoutCartNestedInput>;
  quantity?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type OrderItemCartUpsertWithWhereUniqueWithoutCustomerInput = {
  create: OrderItemCartCreateWithoutCustomerInput;
  update: OrderItemCartUpdateWithoutCustomerInput;
  where: OrderItemCartWhereUniqueInput;
};

export type OrderItemCartUpsertWithWhereUniqueWithoutFoodInput = {
  create: OrderItemCartCreateWithoutFoodInput;
  update: OrderItemCartUpdateWithoutFoodInput;
  where: OrderItemCartWhereUniqueInput;
};

export type OrderItemCartWhereInput = {
  AND?: InputMaybe<Array<OrderItemCartWhereInput>>;
  NOT?: InputMaybe<Array<OrderItemCartWhereInput>>;
  OR?: InputMaybe<Array<OrderItemCartWhereInput>>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<StringFilter>;
  food?: InputMaybe<FoodRelationFilter>;
  foodId?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  quantity?: InputMaybe<IntFilter>;
  totalPrice?: InputMaybe<FloatFilter>;
};

export type OrderItemCartWhereUniqueInput = {
  AND?: InputMaybe<Array<OrderItemCartWhereInput>>;
  NOT?: InputMaybe<Array<OrderItemCartWhereInput>>;
  OR?: InputMaybe<Array<OrderItemCartWhereInput>>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<StringFilter>;
  food?: InputMaybe<FoodRelationFilter>;
  foodId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  quantity?: InputMaybe<IntFilter>;
  totalPrice?: InputMaybe<FloatFilter>;
};

export type OrderListRelationFilter = {
  every?: InputMaybe<OrderWhereInput>;
  none?: InputMaybe<OrderWhereInput>;
  some?: InputMaybe<OrderWhereInput>;
};

export type OrderMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  deliveryAddress?: InputMaybe<SortOrder>;
  deliveryPerson?: InputMaybe<SortOrder>;
  deliveryTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  restaurantId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  deliveryAddress?: InputMaybe<SortOrder>;
  deliveryPerson?: InputMaybe<SortOrder>;
  deliveryTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  restaurantId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrderOrderByWithAggregationInput = {
  _avg?: InputMaybe<OrderAvgOrderByAggregateInput>;
  _count?: InputMaybe<OrderCountOrderByAggregateInput>;
  _max?: InputMaybe<OrderMaxOrderByAggregateInput>;
  _min?: InputMaybe<OrderMinOrderByAggregateInput>;
  _sum?: InputMaybe<OrderSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  deliveryAddress?: InputMaybe<SortOrder>;
  deliveryPerson?: InputMaybe<SortOrderInput>;
  deliveryTime?: InputMaybe<SortOrderInput>;
  foods?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  restaurantId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  deliveryAddress?: InputMaybe<SortOrder>;
  deliveryPerson?: InputMaybe<SortOrderInput>;
  deliveryTime?: InputMaybe<SortOrderInput>;
  foods?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  restaurant?: InputMaybe<RestaurantOrderByWithRelationInput>;
  restaurantId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export enum OrderScalarFieldEnum {
  CreatedAt = 'createdAt',
  CustomerId = 'customerId',
  DeliveryAddress = 'deliveryAddress',
  DeliveryPerson = 'deliveryPerson',
  DeliveryTime = 'deliveryTime',
  Foods = 'foods',
  Id = 'id',
  RestaurantId = 'restaurantId',
  Status = 'status',
  TotalPrice = 'totalPrice'
}

export type OrderScalarWhereInput = {
  AND?: InputMaybe<Array<OrderScalarWhereInput>>;
  NOT?: InputMaybe<Array<OrderScalarWhereInput>>;
  OR?: InputMaybe<Array<OrderScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customerId?: InputMaybe<StringFilter>;
  deliveryAddress?: InputMaybe<StringFilter>;
  deliveryPerson?: InputMaybe<StringNullableFilter>;
  deliveryTime?: InputMaybe<DateTimeNullableFilter>;
  foods?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  restaurantId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  totalPrice?: InputMaybe<FloatFilter>;
};

export type OrderScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OrderScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OrderScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OrderScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  customerId?: InputMaybe<StringWithAggregatesFilter>;
  deliveryAddress?: InputMaybe<StringWithAggregatesFilter>;
  deliveryPerson?: InputMaybe<StringNullableWithAggregatesFilter>;
  deliveryTime?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  foods?: InputMaybe<JsonWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  restaurantId?: InputMaybe<StringWithAggregatesFilter>;
  status?: InputMaybe<EnumOrderStatusWithAggregatesFilter>;
  totalPrice?: InputMaybe<FloatWithAggregatesFilter>;
};

export enum OrderStatus {
  Active = 'ACTIVE',
  Assigned = 'ASSIGNED',
  Canceled = 'CANCELED',
  Delivered = 'DELIVERED',
  OutForDelivery = 'OUT_FOR_DELIVERY',
  Pending = 'PENDING'
}

export type OrderSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
};

export type OrderUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer?: InputMaybe<CustomerUpdateOneRequiredWithoutOrdersNestedInput>;
  deliveryAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  deliveryPerson?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  foods?: InputMaybe<Scalars['JSON']['input']>;
  restaurant?: InputMaybe<RestaurantUpdateOneRequiredWithoutOrdersNestedInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type OrderUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deliveryAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  deliveryPerson?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  foods?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type OrderUpdateManyWithWhereWithoutCustomerInput = {
  data: OrderUpdateManyMutationInput;
  where: OrderScalarWhereInput;
};

export type OrderUpdateManyWithWhereWithoutRestaurantInput = {
  data: OrderUpdateManyMutationInput;
  where: OrderScalarWhereInput;
};

export type OrderUpdateManyWithoutCustomerNestedInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutCustomerInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<OrderCreateManyCustomerInputEnvelope>;
  delete?: InputMaybe<Array<OrderWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: InputMaybe<Array<OrderUpdateManyWithWhereWithoutCustomerInput>>;
  upsert?: InputMaybe<Array<OrderUpsertWithWhereUniqueWithoutCustomerInput>>;
};

export type OrderUpdateManyWithoutRestaurantNestedInput = {
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrderCreateOrConnectWithoutRestaurantInput>>;
  create?: InputMaybe<Array<OrderCreateWithoutRestaurantInput>>;
  createMany?: InputMaybe<OrderCreateManyRestaurantInputEnvelope>;
  delete?: InputMaybe<Array<OrderWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrderScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
  update?: InputMaybe<Array<OrderUpdateWithWhereUniqueWithoutRestaurantInput>>;
  updateMany?: InputMaybe<Array<OrderUpdateManyWithWhereWithoutRestaurantInput>>;
  upsert?: InputMaybe<Array<OrderUpsertWithWhereUniqueWithoutRestaurantInput>>;
};

export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
  data: OrderUpdateWithoutCustomerInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateWithWhereUniqueWithoutRestaurantInput = {
  data: OrderUpdateWithoutRestaurantInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpdateWithoutCustomerInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deliveryAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  deliveryPerson?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  foods?: InputMaybe<Scalars['JSON']['input']>;
  restaurant?: InputMaybe<RestaurantUpdateOneRequiredWithoutOrdersNestedInput>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type OrderUpdateWithoutRestaurantInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  customer?: InputMaybe<CustomerUpdateOneRequiredWithoutOrdersNestedInput>;
  deliveryAddress?: InputMaybe<StringFieldUpdateOperationsInput>;
  deliveryPerson?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deliveryTime?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  foods?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<EnumOrderStatusFieldUpdateOperationsInput>;
  totalPrice?: InputMaybe<FloatFieldUpdateOperationsInput>;
};

export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
  create: OrderCreateWithoutCustomerInput;
  update: OrderUpdateWithoutCustomerInput;
  where: OrderWhereUniqueInput;
};

export type OrderUpsertWithWhereUniqueWithoutRestaurantInput = {
  create: OrderCreateWithoutRestaurantInput;
  update: OrderUpdateWithoutRestaurantInput;
  where: OrderWhereUniqueInput;
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<StringFilter>;
  deliveryAddress?: InputMaybe<StringFilter>;
  deliveryPerson?: InputMaybe<StringNullableFilter>;
  deliveryTime?: InputMaybe<DateTimeNullableFilter>;
  foods?: InputMaybe<JsonFilter>;
  id?: InputMaybe<IntFilter>;
  restaurant?: InputMaybe<RestaurantRelationFilter>;
  restaurantId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  totalPrice?: InputMaybe<FloatFilter>;
};

export type OrderWhereUniqueInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<StringFilter>;
  deliveryAddress?: InputMaybe<StringFilter>;
  deliveryPerson?: InputMaybe<StringNullableFilter>;
  deliveryTime?: InputMaybe<DateTimeNullableFilter>;
  foods?: InputMaybe<JsonFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  restaurant?: InputMaybe<RestaurantRelationFilter>;
  restaurantId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  totalPrice?: InputMaybe<FloatFilter>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RestaurantCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  operatingHours?: InputMaybe<SortOrder>;
};

export type RestaurantCreateInput = {
  location?: InputMaybe<Scalars['String']['input']>;
  menu?: InputMaybe<FoodCreateNestedManyWithoutRestaurantInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  operatingHours?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutRestaurantInput>;
  user: UserCreateNestedOneWithoutRestaurantInput;
};

export type RestaurantCreateManyInput = {
  id: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  operatingHours?: InputMaybe<Scalars['String']['input']>;
};

export type RestaurantCreateNestedOneWithoutMenuInput = {
  connect?: InputMaybe<RestaurantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RestaurantCreateOrConnectWithoutMenuInput>;
  create?: InputMaybe<RestaurantCreateWithoutMenuInput>;
};

export type RestaurantCreateNestedOneWithoutOrdersInput = {
  connect?: InputMaybe<RestaurantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RestaurantCreateOrConnectWithoutOrdersInput>;
  create?: InputMaybe<RestaurantCreateWithoutOrdersInput>;
};

export type RestaurantCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<RestaurantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RestaurantCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<RestaurantCreateWithoutUserInput>;
};

export type RestaurantCreateOrConnectWithoutMenuInput = {
  create: RestaurantCreateWithoutMenuInput;
  where: RestaurantWhereUniqueInput;
};

export type RestaurantCreateOrConnectWithoutOrdersInput = {
  create: RestaurantCreateWithoutOrdersInput;
  where: RestaurantWhereUniqueInput;
};

export type RestaurantCreateOrConnectWithoutUserInput = {
  create: RestaurantCreateWithoutUserInput;
  where: RestaurantWhereUniqueInput;
};

export type RestaurantCreateWithoutMenuInput = {
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  operatingHours?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutRestaurantInput>;
  user: UserCreateNestedOneWithoutRestaurantInput;
};

export type RestaurantCreateWithoutOrdersInput = {
  location?: InputMaybe<Scalars['String']['input']>;
  menu?: InputMaybe<FoodCreateNestedManyWithoutRestaurantInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  operatingHours?: InputMaybe<Scalars['String']['input']>;
  user: UserCreateNestedOneWithoutRestaurantInput;
};

export type RestaurantCreateWithoutUserInput = {
  location?: InputMaybe<Scalars['String']['input']>;
  menu?: InputMaybe<FoodCreateNestedManyWithoutRestaurantInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  operatingHours?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<OrderCreateNestedManyWithoutRestaurantInput>;
};

export type RestaurantMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  operatingHours?: InputMaybe<SortOrder>;
};

export type RestaurantMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  operatingHours?: InputMaybe<SortOrder>;
};

export type RestaurantNullableRelationFilter = {
  is?: InputMaybe<RestaurantWhereInput>;
  isNot?: InputMaybe<RestaurantWhereInput>;
};

export type RestaurantOrderByWithAggregationInput = {
  _count?: InputMaybe<RestaurantCountOrderByAggregateInput>;
  _max?: InputMaybe<RestaurantMaxOrderByAggregateInput>;
  _min?: InputMaybe<RestaurantMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrderInput>;
  operatingHours?: InputMaybe<SortOrderInput>;
};

export type RestaurantOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrderInput>;
  menu?: InputMaybe<FoodOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrderInput>;
  operatingHours?: InputMaybe<SortOrderInput>;
  orders?: InputMaybe<OrderOrderByRelationAggregateInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type RestaurantRelationFilter = {
  is?: InputMaybe<RestaurantWhereInput>;
  isNot?: InputMaybe<RestaurantWhereInput>;
};

export enum RestaurantScalarFieldEnum {
  Id = 'id',
  Location = 'location',
  Name = 'name',
  OperatingHours = 'operatingHours'
}

export type RestaurantScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RestaurantScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RestaurantScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RestaurantScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  location?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  operatingHours?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type RestaurantUpdateInput = {
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  menu?: InputMaybe<FoodUpdateManyWithoutRestaurantNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  operatingHours?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutRestaurantNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRestaurantNestedInput>;
};

export type RestaurantUpdateManyMutationInput = {
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  operatingHours?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type RestaurantUpdateOneRequiredWithoutMenuNestedInput = {
  connect?: InputMaybe<RestaurantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RestaurantCreateOrConnectWithoutMenuInput>;
  create?: InputMaybe<RestaurantCreateWithoutMenuInput>;
  update?: InputMaybe<RestaurantUpdateToOneWithWhereWithoutMenuInput>;
  upsert?: InputMaybe<RestaurantUpsertWithoutMenuInput>;
};

export type RestaurantUpdateOneRequiredWithoutOrdersNestedInput = {
  connect?: InputMaybe<RestaurantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RestaurantCreateOrConnectWithoutOrdersInput>;
  create?: InputMaybe<RestaurantCreateWithoutOrdersInput>;
  update?: InputMaybe<RestaurantUpdateToOneWithWhereWithoutOrdersInput>;
  upsert?: InputMaybe<RestaurantUpsertWithoutOrdersInput>;
};

export type RestaurantUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<RestaurantWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RestaurantCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<RestaurantCreateWithoutUserInput>;
  delete?: InputMaybe<RestaurantWhereInput>;
  disconnect?: InputMaybe<RestaurantWhereInput>;
  update?: InputMaybe<RestaurantUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<RestaurantUpsertWithoutUserInput>;
};

export type RestaurantUpdateToOneWithWhereWithoutMenuInput = {
  data: RestaurantUpdateWithoutMenuInput;
  where?: InputMaybe<RestaurantWhereInput>;
};

export type RestaurantUpdateToOneWithWhereWithoutOrdersInput = {
  data: RestaurantUpdateWithoutOrdersInput;
  where?: InputMaybe<RestaurantWhereInput>;
};

export type RestaurantUpdateToOneWithWhereWithoutUserInput = {
  data: RestaurantUpdateWithoutUserInput;
  where?: InputMaybe<RestaurantWhereInput>;
};

export type RestaurantUpdateWithoutMenuInput = {
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  operatingHours?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutRestaurantNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRestaurantNestedInput>;
};

export type RestaurantUpdateWithoutOrdersInput = {
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  menu?: InputMaybe<FoodUpdateManyWithoutRestaurantNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  operatingHours?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRestaurantNestedInput>;
};

export type RestaurantUpdateWithoutUserInput = {
  location?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  menu?: InputMaybe<FoodUpdateManyWithoutRestaurantNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  operatingHours?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  orders?: InputMaybe<OrderUpdateManyWithoutRestaurantNestedInput>;
};

export type RestaurantUpsertWithoutMenuInput = {
  create: RestaurantCreateWithoutMenuInput;
  update: RestaurantUpdateWithoutMenuInput;
  where?: InputMaybe<RestaurantWhereInput>;
};

export type RestaurantUpsertWithoutOrdersInput = {
  create: RestaurantCreateWithoutOrdersInput;
  update: RestaurantUpdateWithoutOrdersInput;
  where?: InputMaybe<RestaurantWhereInput>;
};

export type RestaurantUpsertWithoutUserInput = {
  create: RestaurantCreateWithoutUserInput;
  update: RestaurantUpdateWithoutUserInput;
  where?: InputMaybe<RestaurantWhereInput>;
};

export type RestaurantWhereInput = {
  AND?: InputMaybe<Array<RestaurantWhereInput>>;
  NOT?: InputMaybe<Array<RestaurantWhereInput>>;
  OR?: InputMaybe<Array<RestaurantWhereInput>>;
  id?: InputMaybe<StringFilter>;
  location?: InputMaybe<StringNullableFilter>;
  menu?: InputMaybe<FoodListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  operatingHours?: InputMaybe<StringNullableFilter>;
  orders?: InputMaybe<OrderListRelationFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type RestaurantWhereUniqueInput = {
  AND?: InputMaybe<Array<RestaurantWhereInput>>;
  NOT?: InputMaybe<Array<RestaurantWhereInput>>;
  OR?: InputMaybe<Array<RestaurantWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<StringNullableFilter>;
  menu?: InputMaybe<FoodListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  operatingHours?: InputMaybe<StringNullableFilter>;
  orders?: InputMaybe<OrderListRelationFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export enum Role {
  Customer = 'CUSTOMER',
  Restaurant = 'RESTAURANT'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UserCountOrderByAggregateInput = {
  dateOfBirth?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  customer?: InputMaybe<CustomerCreateNestedOneWithoutUserInput>;
  dateOfBirth: Scalars['DateTimeISO']['input'];
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  restaurant?: InputMaybe<RestaurantCreateNestedOneWithoutUserInput>;
  role: Role;
};

export type UserCreateManyInput = {
  dateOfBirth: Scalars['DateTimeISO']['input'];
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  role: Role;
};

export type UserCreateNestedOneWithoutCustomerInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCustomerInput>;
  create?: InputMaybe<UserCreateWithoutCustomerInput>;
};

export type UserCreateNestedOneWithoutRestaurantInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRestaurantInput>;
  create?: InputMaybe<UserCreateWithoutRestaurantInput>;
};

export type UserCreateOrConnectWithoutCustomerInput = {
  create: UserCreateWithoutCustomerInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRestaurantInput = {
  create: UserCreateWithoutRestaurantInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutCustomerInput = {
  dateOfBirth: Scalars['DateTimeISO']['input'];
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  restaurant?: InputMaybe<RestaurantCreateNestedOneWithoutUserInput>;
  role: Role;
};

export type UserCreateWithoutRestaurantInput = {
  customer?: InputMaybe<CustomerCreateNestedOneWithoutUserInput>;
  dateOfBirth: Scalars['DateTimeISO']['input'];
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  role: Role;
};

export type UserMaxOrderByAggregateInput = {
  dateOfBirth?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserMinOrderByAggregateInput = {
  dateOfBirth?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  dateOfBirth?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  dateOfBirth?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  restaurant?: InputMaybe<RestaurantOrderByWithRelationInput>;
  role?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  DateOfBirth = 'dateOfBirth',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  Phone = 'phone',
  ResetPassOtp = 'resetPassOtp',
  ResetPassOtpExpiry = 'resetPassOtpExpiry',
  Role = 'role',
  Verification = 'verification',
  VerificationOtp = 'verificationOtp',
  VerificationOtpExpiry = 'verificationOtpExpiry'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  dateOfBirth?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  phone?: InputMaybe<StringWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleWithAggregatesFilter>;
};

export type UserUpdateInput = {
  customer?: InputMaybe<CustomerUpdateOneWithoutUserNestedInput>;
  dateOfBirth?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  restaurant?: InputMaybe<RestaurantUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  dateOfBirth?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutCustomerNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCustomerInput>;
  create?: InputMaybe<UserCreateWithoutCustomerInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCustomerInput>;
  upsert?: InputMaybe<UserUpsertWithoutCustomerInput>;
};

export type UserUpdateOneRequiredWithoutRestaurantNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRestaurantInput>;
  create?: InputMaybe<UserCreateWithoutRestaurantInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutRestaurantInput>;
  upsert?: InputMaybe<UserUpsertWithoutRestaurantInput>;
};

export type UserUpdateToOneWithWhereWithoutCustomerInput = {
  data: UserUpdateWithoutCustomerInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutRestaurantInput = {
  data: UserUpdateWithoutRestaurantInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutCustomerInput = {
  dateOfBirth?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  restaurant?: InputMaybe<RestaurantUpdateOneWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRestaurantInput = {
  customer?: InputMaybe<CustomerUpdateOneWithoutUserNestedInput>;
  dateOfBirth?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutCustomerInput = {
  create: UserCreateWithoutCustomerInput;
  update: UserUpdateWithoutCustomerInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutRestaurantInput = {
  create: UserCreateWithoutRestaurantInput;
  update: UserUpdateWithoutRestaurantInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  customer?: InputMaybe<CustomerNullableRelationFilter>;
  dateOfBirth?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  restaurant?: InputMaybe<RestaurantNullableRelationFilter>;
  role?: InputMaybe<EnumRoleFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  customer?: InputMaybe<CustomerNullableRelationFilter>;
  dateOfBirth?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  restaurant?: InputMaybe<RestaurantNullableRelationFilter>;
  role?: InputMaybe<EnumRoleFilter>;
};
