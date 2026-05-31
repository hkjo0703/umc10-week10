
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model FoodCategory
 * 
 */
export type FoodCategory = $Result.DefaultSelection<Prisma.$FoodCategoryPayload>
/**
 * Model Inquiry
 * 
 */
export type Inquiry = $Result.DefaultSelection<Prisma.$InquiryPayload>
/**
 * Model InquiryImage
 * 
 */
export type InquiryImage = $Result.DefaultSelection<Prisma.$InquiryImagePayload>
/**
 * Model Mission
 * 
 */
export type Mission = $Result.DefaultSelection<Prisma.$MissionPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model PointHistory
 * 
 */
export type PointHistory = $Result.DefaultSelection<Prisma.$PointHistoryPayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model ReviewComment
 * 
 */
export type ReviewComment = $Result.DefaultSelection<Prisma.$ReviewCommentPayload>
/**
 * Model ReviewImage
 * 
 */
export type ReviewImage = $Result.DefaultSelection<Prisma.$ReviewImagePayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model StoreImage
 * 
 */
export type StoreImage = $Result.DefaultSelection<Prisma.$StoreImagePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserFoodCategory
 * 
 */
export type UserFoodCategory = $Result.DefaultSelection<Prisma.$UserFoodCategoryPayload>
/**
 * Model UserMission
 * 
 */
export type UserMission = $Result.DefaultSelection<Prisma.$UserMissionPayload>
/**
 * Model UserRegionMissionCount
 * 
 */
export type UserRegionMissionCount = $Result.DefaultSelection<Prisma.$UserRegionMissionCountPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserGender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  NONE: 'NONE'
};

export type UserGender = (typeof UserGender)[keyof typeof UserGender]


export const InquiryStatus: {
  WAITING: 'WAITING',
  IN_PROGRESS: 'IN_PROGRESS',
  ANSWERED: 'ANSWERED',
  DONE: 'DONE'
};

export type InquiryStatus = (typeof InquiryStatus)[keyof typeof InquiryStatus]


export const UserMissionStatus: {
  CHALLENGING: 'CHALLENGING',
  DONE: 'DONE'
};

export type UserMissionStatus = (typeof UserMissionStatus)[keyof typeof UserMissionStatus]

}

export type UserGender = $Enums.UserGender

export const UserGender: typeof $Enums.UserGender

export type InquiryStatus = $Enums.InquiryStatus

export const InquiryStatus: typeof $Enums.InquiryStatus

export type UserMissionStatus = $Enums.UserMissionStatus

export const UserMissionStatus: typeof $Enums.UserMissionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more FoodCategories
 * const foodCategories = await prisma.foodCategory.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more FoodCategories
   * const foodCategories = await prisma.foodCategory.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.foodCategory`: Exposes CRUD operations for the **FoodCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodCategories
    * const foodCategories = await prisma.foodCategory.findMany()
    * ```
    */
  get foodCategory(): Prisma.FoodCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inquiry`: Exposes CRUD operations for the **Inquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inquiries
    * const inquiries = await prisma.inquiry.findMany()
    * ```
    */
  get inquiry(): Prisma.InquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inquiryImage`: Exposes CRUD operations for the **InquiryImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InquiryImages
    * const inquiryImages = await prisma.inquiryImage.findMany()
    * ```
    */
  get inquiryImage(): Prisma.InquiryImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mission`: Exposes CRUD operations for the **Mission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Missions
    * const missions = await prisma.mission.findMany()
    * ```
    */
  get mission(): Prisma.MissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pointHistory`: Exposes CRUD operations for the **PointHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PointHistories
    * const pointHistories = await prisma.pointHistory.findMany()
    * ```
    */
  get pointHistory(): Prisma.PointHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewComment`: Exposes CRUD operations for the **ReviewComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewComments
    * const reviewComments = await prisma.reviewComment.findMany()
    * ```
    */
  get reviewComment(): Prisma.ReviewCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewImage`: Exposes CRUD operations for the **ReviewImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewImages
    * const reviewImages = await prisma.reviewImage.findMany()
    * ```
    */
  get reviewImage(): Prisma.ReviewImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.storeImage`: Exposes CRUD operations for the **StoreImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StoreImages
    * const storeImages = await prisma.storeImage.findMany()
    * ```
    */
  get storeImage(): Prisma.StoreImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFoodCategory`: Exposes CRUD operations for the **UserFoodCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFoodCategories
    * const userFoodCategories = await prisma.userFoodCategory.findMany()
    * ```
    */
  get userFoodCategory(): Prisma.UserFoodCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userMission`: Exposes CRUD operations for the **UserMission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMissions
    * const userMissions = await prisma.userMission.findMany()
    * ```
    */
  get userMission(): Prisma.UserMissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRegionMissionCount`: Exposes CRUD operations for the **UserRegionMissionCount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRegionMissionCounts
    * const userRegionMissionCounts = await prisma.userRegionMissionCount.findMany()
    * ```
    */
  get userRegionMissionCount(): Prisma.UserRegionMissionCountDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    FoodCategory: 'FoodCategory',
    Inquiry: 'Inquiry',
    InquiryImage: 'InquiryImage',
    Mission: 'Mission',
    Notification: 'Notification',
    PointHistory: 'PointHistory',
    Region: 'Region',
    Review: 'Review',
    ReviewComment: 'ReviewComment',
    ReviewImage: 'ReviewImage',
    Store: 'Store',
    StoreImage: 'StoreImage',
    User: 'User',
    UserFoodCategory: 'UserFoodCategory',
    UserMission: 'UserMission',
    UserRegionMissionCount: 'UserRegionMissionCount'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "foodCategory" | "inquiry" | "inquiryImage" | "mission" | "notification" | "pointHistory" | "region" | "review" | "reviewComment" | "reviewImage" | "store" | "storeImage" | "user" | "userFoodCategory" | "userMission" | "userRegionMissionCount"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FoodCategory: {
        payload: Prisma.$FoodCategoryPayload<ExtArgs>
        fields: Prisma.FoodCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          findFirst: {
            args: Prisma.FoodCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          findMany: {
            args: Prisma.FoodCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>[]
          }
          create: {
            args: Prisma.FoodCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          createMany: {
            args: Prisma.FoodCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FoodCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          update: {
            args: Prisma.FoodCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          deleteMany: {
            args: Prisma.FoodCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          aggregate: {
            args: Prisma.FoodCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodCategory>
          }
          groupBy: {
            args: Prisma.FoodCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCategoryCountAggregateOutputType> | number
          }
        }
      }
      Inquiry: {
        payload: Prisma.$InquiryPayload<ExtArgs>
        fields: Prisma.InquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findFirst: {
            args: Prisma.InquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          findMany: {
            args: Prisma.InquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>[]
          }
          create: {
            args: Prisma.InquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          createMany: {
            args: Prisma.InquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          update: {
            args: Prisma.InquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          deleteMany: {
            args: Prisma.InquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryPayload>
          }
          aggregate: {
            args: Prisma.InquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInquiry>
          }
          groupBy: {
            args: Prisma.InquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InquiryCountArgs<ExtArgs>
            result: $Utils.Optional<InquiryCountAggregateOutputType> | number
          }
        }
      }
      InquiryImage: {
        payload: Prisma.$InquiryImagePayload<ExtArgs>
        fields: Prisma.InquiryImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InquiryImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InquiryImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload>
          }
          findFirst: {
            args: Prisma.InquiryImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InquiryImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload>
          }
          findMany: {
            args: Prisma.InquiryImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload>[]
          }
          create: {
            args: Prisma.InquiryImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload>
          }
          createMany: {
            args: Prisma.InquiryImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InquiryImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload>
          }
          update: {
            args: Prisma.InquiryImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload>
          }
          deleteMany: {
            args: Prisma.InquiryImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InquiryImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InquiryImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InquiryImagePayload>
          }
          aggregate: {
            args: Prisma.InquiryImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInquiryImage>
          }
          groupBy: {
            args: Prisma.InquiryImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<InquiryImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.InquiryImageCountArgs<ExtArgs>
            result: $Utils.Optional<InquiryImageCountAggregateOutputType> | number
          }
        }
      }
      Mission: {
        payload: Prisma.$MissionPayload<ExtArgs>
        fields: Prisma.MissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findFirst: {
            args: Prisma.MissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          findMany: {
            args: Prisma.MissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>[]
          }
          create: {
            args: Prisma.MissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          createMany: {
            args: Prisma.MissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          update: {
            args: Prisma.MissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          deleteMany: {
            args: Prisma.MissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MissionPayload>
          }
          aggregate: {
            args: Prisma.MissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMission>
          }
          groupBy: {
            args: Prisma.MissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MissionCountArgs<ExtArgs>
            result: $Utils.Optional<MissionCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      PointHistory: {
        payload: Prisma.$PointHistoryPayload<ExtArgs>
        fields: Prisma.PointHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointHistoryPayload>
          }
          findFirst: {
            args: Prisma.PointHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointHistoryPayload>
          }
          findMany: {
            args: Prisma.PointHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointHistoryPayload>[]
          }
          create: {
            args: Prisma.PointHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointHistoryPayload>
          }
          createMany: {
            args: Prisma.PointHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PointHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointHistoryPayload>
          }
          update: {
            args: Prisma.PointHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PointHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PointHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointHistoryPayload>
          }
          aggregate: {
            args: Prisma.PointHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePointHistory>
          }
          groupBy: {
            args: Prisma.PointHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PointHistoryCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      ReviewComment: {
        payload: Prisma.$ReviewCommentPayload<ExtArgs>
        fields: Prisma.ReviewCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCommentPayload>
          }
          findFirst: {
            args: Prisma.ReviewCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCommentPayload>
          }
          findMany: {
            args: Prisma.ReviewCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCommentPayload>[]
          }
          create: {
            args: Prisma.ReviewCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCommentPayload>
          }
          createMany: {
            args: Prisma.ReviewCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCommentPayload>
          }
          update: {
            args: Prisma.ReviewCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCommentPayload>
          }
          deleteMany: {
            args: Prisma.ReviewCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewCommentPayload>
          }
          aggregate: {
            args: Prisma.ReviewCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewComment>
          }
          groupBy: {
            args: Prisma.ReviewCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCommentCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCommentCountAggregateOutputType> | number
          }
        }
      }
      ReviewImage: {
        payload: Prisma.$ReviewImagePayload<ExtArgs>
        fields: Prisma.ReviewImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          findFirst: {
            args: Prisma.ReviewImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          findMany: {
            args: Prisma.ReviewImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>[]
          }
          create: {
            args: Prisma.ReviewImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          createMany: {
            args: Prisma.ReviewImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          update: {
            args: Prisma.ReviewImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          deleteMany: {
            args: Prisma.ReviewImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewImagePayload>
          }
          aggregate: {
            args: Prisma.ReviewImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewImage>
          }
          groupBy: {
            args: Prisma.ReviewImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewImageCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewImageCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      StoreImage: {
        payload: Prisma.$StoreImagePayload<ExtArgs>
        fields: Prisma.StoreImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          findFirst: {
            args: Prisma.StoreImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          findMany: {
            args: Prisma.StoreImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>[]
          }
          create: {
            args: Prisma.StoreImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          createMany: {
            args: Prisma.StoreImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          update: {
            args: Prisma.StoreImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          deleteMany: {
            args: Prisma.StoreImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StoreImagePayload>
          }
          aggregate: {
            args: Prisma.StoreImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStoreImage>
          }
          groupBy: {
            args: Prisma.StoreImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreImageCountArgs<ExtArgs>
            result: $Utils.Optional<StoreImageCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserFoodCategory: {
        payload: Prisma.$UserFoodCategoryPayload<ExtArgs>
        fields: Prisma.UserFoodCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFoodCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFoodCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload>
          }
          findFirst: {
            args: Prisma.UserFoodCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFoodCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload>
          }
          findMany: {
            args: Prisma.UserFoodCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload>[]
          }
          create: {
            args: Prisma.UserFoodCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload>
          }
          createMany: {
            args: Prisma.UserFoodCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserFoodCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload>
          }
          update: {
            args: Prisma.UserFoodCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload>
          }
          deleteMany: {
            args: Prisma.UserFoodCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFoodCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserFoodCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFoodCategoryPayload>
          }
          aggregate: {
            args: Prisma.UserFoodCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFoodCategory>
          }
          groupBy: {
            args: Prisma.UserFoodCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFoodCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFoodCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<UserFoodCategoryCountAggregateOutputType> | number
          }
        }
      }
      UserMission: {
        payload: Prisma.$UserMissionPayload<ExtArgs>
        fields: Prisma.UserMissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload>
          }
          findFirst: {
            args: Prisma.UserMissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload>
          }
          findMany: {
            args: Prisma.UserMissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload>[]
          }
          create: {
            args: Prisma.UserMissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload>
          }
          createMany: {
            args: Prisma.UserMissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserMissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload>
          }
          update: {
            args: Prisma.UserMissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload>
          }
          deleteMany: {
            args: Prisma.UserMissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserMissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserMissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMissionPayload>
          }
          aggregate: {
            args: Prisma.UserMissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMission>
          }
          groupBy: {
            args: Prisma.UserMissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserMissionCountArgs<ExtArgs>
            result: $Utils.Optional<UserMissionCountAggregateOutputType> | number
          }
        }
      }
      UserRegionMissionCount: {
        payload: Prisma.$UserRegionMissionCountPayload<ExtArgs>
        fields: Prisma.UserRegionMissionCountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRegionMissionCountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionMissionCountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRegionMissionCountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionMissionCountPayload>
          }
          findFirst: {
            args: Prisma.UserRegionMissionCountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionMissionCountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRegionMissionCountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionMissionCountPayload>
          }
          findMany: {
            args: Prisma.UserRegionMissionCountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionMissionCountPayload>[]
          }
          create: {
            args: Prisma.UserRegionMissionCountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionMissionCountPayload>
          }
          createMany: {
            args: Prisma.UserRegionMissionCountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserRegionMissionCountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionMissionCountPayload>
          }
          update: {
            args: Prisma.UserRegionMissionCountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionMissionCountPayload>
          }
          deleteMany: {
            args: Prisma.UserRegionMissionCountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRegionMissionCountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserRegionMissionCountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRegionMissionCountPayload>
          }
          aggregate: {
            args: Prisma.UserRegionMissionCountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRegionMissionCount>
          }
          groupBy: {
            args: Prisma.UserRegionMissionCountGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRegionMissionCountGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRegionMissionCountCountArgs<ExtArgs>
            result: $Utils.Optional<UserRegionMissionCountCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    foodCategory?: FoodCategoryOmit
    inquiry?: InquiryOmit
    inquiryImage?: InquiryImageOmit
    mission?: MissionOmit
    notification?: NotificationOmit
    pointHistory?: PointHistoryOmit
    region?: RegionOmit
    review?: ReviewOmit
    reviewComment?: ReviewCommentOmit
    reviewImage?: ReviewImageOmit
    store?: StoreOmit
    storeImage?: StoreImageOmit
    user?: UserOmit
    userFoodCategory?: UserFoodCategoryOmit
    userMission?: UserMissionOmit
    userRegionMissionCount?: UserRegionMissionCountOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model FoodCategory
   */

  export type AggregateFoodCategory = {
    _count: FoodCategoryCountAggregateOutputType | null
    _avg: FoodCategoryAvgAggregateOutputType | null
    _sum: FoodCategorySumAggregateOutputType | null
    _min: FoodCategoryMinAggregateOutputType | null
    _max: FoodCategoryMaxAggregateOutputType | null
  }

  export type FoodCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type FoodCategorySumAggregateOutputType = {
    id: bigint | null
  }

  export type FoodCategoryMinAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type FoodCategoryMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type FoodCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type FoodCategoryAvgAggregateInputType = {
    id?: true
  }

  export type FoodCategorySumAggregateInputType = {
    id?: true
  }

  export type FoodCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FoodCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FoodCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type FoodCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodCategory to aggregate.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodCategories
    **/
    _count?: true | FoodCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodCategoryMaxAggregateInputType
  }

  export type GetFoodCategoryAggregateType<T extends FoodCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodCategory[P]>
      : GetScalarType<T[P], AggregateFoodCategory[P]>
  }




  export type FoodCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodCategoryWhereInput
    orderBy?: FoodCategoryOrderByWithAggregationInput | FoodCategoryOrderByWithAggregationInput[]
    by: FoodCategoryScalarFieldEnum[] | FoodCategoryScalarFieldEnum
    having?: FoodCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCategoryCountAggregateInputType | true
    _avg?: FoodCategoryAvgAggregateInputType
    _sum?: FoodCategorySumAggregateInputType
    _min?: FoodCategoryMinAggregateInputType
    _max?: FoodCategoryMaxAggregateInputType
  }

  export type FoodCategoryGroupByOutputType = {
    id: bigint
    name: string
    _count: FoodCategoryCountAggregateOutputType | null
    _avg: FoodCategoryAvgAggregateOutputType | null
    _sum: FoodCategorySumAggregateOutputType | null
    _min: FoodCategoryMinAggregateOutputType | null
    _max: FoodCategoryMaxAggregateOutputType | null
  }

  type GetFoodCategoryGroupByPayload<T extends FoodCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], FoodCategoryGroupByOutputType[P]>
        }
      >
    >


  export type FoodCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["foodCategory"]>



  export type FoodCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type FoodCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["foodCategory"]>

  export type $FoodCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodCategory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
    }, ExtArgs["result"]["foodCategory"]>
    composites: {}
  }

  type FoodCategoryGetPayload<S extends boolean | null | undefined | FoodCategoryDefaultArgs> = $Result.GetResult<Prisma.$FoodCategoryPayload, S>

  type FoodCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCategoryCountAggregateInputType | true
    }

  export interface FoodCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodCategory'], meta: { name: 'FoodCategory' } }
    /**
     * Find zero or one FoodCategory that matches the filter.
     * @param {FoodCategoryFindUniqueArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodCategoryFindUniqueArgs>(args: SelectSubset<T, FoodCategoryFindUniqueArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodCategoryFindUniqueOrThrowArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindFirstArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodCategoryFindFirstArgs>(args?: SelectSubset<T, FoodCategoryFindFirstArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindFirstOrThrowArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodCategories
     * const foodCategories = await prisma.foodCategory.findMany()
     * 
     * // Get first 10 FoodCategories
     * const foodCategories = await prisma.foodCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodCategoryWithIdOnly = await prisma.foodCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodCategoryFindManyArgs>(args?: SelectSubset<T, FoodCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodCategory.
     * @param {FoodCategoryCreateArgs} args - Arguments to create a FoodCategory.
     * @example
     * // Create one FoodCategory
     * const FoodCategory = await prisma.foodCategory.create({
     *   data: {
     *     // ... data to create a FoodCategory
     *   }
     * })
     * 
     */
    create<T extends FoodCategoryCreateArgs>(args: SelectSubset<T, FoodCategoryCreateArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodCategories.
     * @param {FoodCategoryCreateManyArgs} args - Arguments to create many FoodCategories.
     * @example
     * // Create many FoodCategories
     * const foodCategory = await prisma.foodCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodCategoryCreateManyArgs>(args?: SelectSubset<T, FoodCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FoodCategory.
     * @param {FoodCategoryDeleteArgs} args - Arguments to delete one FoodCategory.
     * @example
     * // Delete one FoodCategory
     * const FoodCategory = await prisma.foodCategory.delete({
     *   where: {
     *     // ... filter to delete one FoodCategory
     *   }
     * })
     * 
     */
    delete<T extends FoodCategoryDeleteArgs>(args: SelectSubset<T, FoodCategoryDeleteArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodCategory.
     * @param {FoodCategoryUpdateArgs} args - Arguments to update one FoodCategory.
     * @example
     * // Update one FoodCategory
     * const foodCategory = await prisma.foodCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodCategoryUpdateArgs>(args: SelectSubset<T, FoodCategoryUpdateArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodCategories.
     * @param {FoodCategoryDeleteManyArgs} args - Arguments to filter FoodCategories to delete.
     * @example
     * // Delete a few FoodCategories
     * const { count } = await prisma.foodCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodCategoryDeleteManyArgs>(args?: SelectSubset<T, FoodCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodCategories
     * const foodCategory = await prisma.foodCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodCategoryUpdateManyArgs>(args: SelectSubset<T, FoodCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FoodCategory.
     * @param {FoodCategoryUpsertArgs} args - Arguments to update or create a FoodCategory.
     * @example
     * // Update or create a FoodCategory
     * const foodCategory = await prisma.foodCategory.upsert({
     *   create: {
     *     // ... data to create a FoodCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodCategory we want to update
     *   }
     * })
     */
    upsert<T extends FoodCategoryUpsertArgs>(args: SelectSubset<T, FoodCategoryUpsertArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryCountArgs} args - Arguments to filter FoodCategories to count.
     * @example
     * // Count the number of FoodCategories
     * const count = await prisma.foodCategory.count({
     *   where: {
     *     // ... the filter for the FoodCategories we want to count
     *   }
     * })
    **/
    count<T extends FoodCategoryCountArgs>(
      args?: Subset<T, FoodCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodCategoryAggregateArgs>(args: Subset<T, FoodCategoryAggregateArgs>): Prisma.PrismaPromise<GetFoodCategoryAggregateType<T>>

    /**
     * Group by FoodCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FoodCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodCategoryGroupByArgs['orderBy'] }
        : { orderBy?: FoodCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FoodCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodCategory model
   */
  readonly fields: FoodCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FoodCategory model
   */
  interface FoodCategoryFieldRefs {
    readonly id: FieldRef<"FoodCategory", 'BigInt'>
    readonly name: FieldRef<"FoodCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FoodCategory findUnique
   */
  export type FoodCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory findUniqueOrThrow
   */
  export type FoodCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory findFirst
   */
  export type FoodCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodCategories.
     */
    distinct?: FoodCategoryScalarFieldEnum | FoodCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory findFirstOrThrow
   */
  export type FoodCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodCategories.
     */
    distinct?: FoodCategoryScalarFieldEnum | FoodCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory findMany
   */
  export type FoodCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Filter, which FoodCategories to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodCategories.
     */
    distinct?: FoodCategoryScalarFieldEnum | FoodCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory create
   */
  export type FoodCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a FoodCategory.
     */
    data: XOR<FoodCategoryCreateInput, FoodCategoryUncheckedCreateInput>
  }

  /**
   * FoodCategory createMany
   */
  export type FoodCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodCategories.
     */
    data: FoodCategoryCreateManyInput | FoodCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodCategory update
   */
  export type FoodCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a FoodCategory.
     */
    data: XOR<FoodCategoryUpdateInput, FoodCategoryUncheckedUpdateInput>
    /**
     * Choose, which FoodCategory to update.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory updateMany
   */
  export type FoodCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodCategories.
     */
    data: XOR<FoodCategoryUpdateManyMutationInput, FoodCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FoodCategories to update
     */
    where?: FoodCategoryWhereInput
    /**
     * Limit how many FoodCategories to update.
     */
    limit?: number
  }

  /**
   * FoodCategory upsert
   */
  export type FoodCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the FoodCategory to update in case it exists.
     */
    where: FoodCategoryWhereUniqueInput
    /**
     * In case the FoodCategory found by the `where` argument doesn't exist, create a new FoodCategory with this data.
     */
    create: XOR<FoodCategoryCreateInput, FoodCategoryUncheckedCreateInput>
    /**
     * In case the FoodCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodCategoryUpdateInput, FoodCategoryUncheckedUpdateInput>
  }

  /**
   * FoodCategory delete
   */
  export type FoodCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Filter which FoodCategory to delete.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory deleteMany
   */
  export type FoodCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodCategories to delete
     */
    where?: FoodCategoryWhereInput
    /**
     * Limit how many FoodCategories to delete.
     */
    limit?: number
  }

  /**
   * FoodCategory without action
   */
  export type FoodCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
  }


  /**
   * Model Inquiry
   */

  export type AggregateInquiry = {
    _count: InquiryCountAggregateOutputType | null
    _avg: InquiryAvgAggregateOutputType | null
    _sum: InquirySumAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  export type InquiryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type InquirySumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
  }

  export type InquiryMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    title: string | null
    content: string | null
    status: $Enums.InquiryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InquiryMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    title: string | null
    content: string | null
    status: $Enums.InquiryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InquiryCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    content: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InquiryAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type InquirySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type InquiryMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InquiryMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InquiryCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiry to aggregate.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inquiries
    **/
    _count?: true | InquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InquiryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InquirySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InquiryMaxAggregateInputType
  }

  export type GetInquiryAggregateType<T extends InquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateInquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquiry[P]>
      : GetScalarType<T[P], AggregateInquiry[P]>
  }




  export type InquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryWhereInput
    orderBy?: InquiryOrderByWithAggregationInput | InquiryOrderByWithAggregationInput[]
    by: InquiryScalarFieldEnum[] | InquiryScalarFieldEnum
    having?: InquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InquiryCountAggregateInputType | true
    _avg?: InquiryAvgAggregateInputType
    _sum?: InquirySumAggregateInputType
    _min?: InquiryMinAggregateInputType
    _max?: InquiryMaxAggregateInputType
  }

  export type InquiryGroupByOutputType = {
    id: bigint
    userId: bigint
    title: string
    content: string | null
    status: $Enums.InquiryStatus
    createdAt: Date
    updatedAt: Date | null
    _count: InquiryCountAggregateOutputType | null
    _avg: InquiryAvgAggregateOutputType | null
    _sum: InquirySumAggregateOutputType | null
    _min: InquiryMinAggregateOutputType | null
    _max: InquiryMaxAggregateOutputType | null
  }

  type GetInquiryGroupByPayload<T extends InquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InquiryGroupByOutputType[P]>
            : GetScalarType<T[P], InquiryGroupByOutputType[P]>
        }
      >
    >


  export type InquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["inquiry"]>



  export type InquirySelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "content" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["inquiry"]>

  export type $InquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inquiry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: bigint
      title: string
      content: string | null
      status: $Enums.InquiryStatus
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["inquiry"]>
    composites: {}
  }

  type InquiryGetPayload<S extends boolean | null | undefined | InquiryDefaultArgs> = $Result.GetResult<Prisma.$InquiryPayload, S>

  type InquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InquiryCountAggregateInputType | true
    }

  export interface InquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inquiry'], meta: { name: 'Inquiry' } }
    /**
     * Find zero or one Inquiry that matches the filter.
     * @param {InquiryFindUniqueArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InquiryFindUniqueArgs>(args: SelectSubset<T, InquiryFindUniqueArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InquiryFindUniqueOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, InquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InquiryFindFirstArgs>(args?: SelectSubset<T, InquiryFindFirstArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindFirstOrThrowArgs} args - Arguments to find a Inquiry
     * @example
     * // Get one Inquiry
     * const inquiry = await prisma.inquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, InquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inquiries
     * const inquiries = await prisma.inquiry.findMany()
     * 
     * // Get first 10 Inquiries
     * const inquiries = await prisma.inquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inquiryWithIdOnly = await prisma.inquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InquiryFindManyArgs>(args?: SelectSubset<T, InquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inquiry.
     * @param {InquiryCreateArgs} args - Arguments to create a Inquiry.
     * @example
     * // Create one Inquiry
     * const Inquiry = await prisma.inquiry.create({
     *   data: {
     *     // ... data to create a Inquiry
     *   }
     * })
     * 
     */
    create<T extends InquiryCreateArgs>(args: SelectSubset<T, InquiryCreateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inquiries.
     * @param {InquiryCreateManyArgs} args - Arguments to create many Inquiries.
     * @example
     * // Create many Inquiries
     * const inquiry = await prisma.inquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InquiryCreateManyArgs>(args?: SelectSubset<T, InquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inquiry.
     * @param {InquiryDeleteArgs} args - Arguments to delete one Inquiry.
     * @example
     * // Delete one Inquiry
     * const Inquiry = await prisma.inquiry.delete({
     *   where: {
     *     // ... filter to delete one Inquiry
     *   }
     * })
     * 
     */
    delete<T extends InquiryDeleteArgs>(args: SelectSubset<T, InquiryDeleteArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inquiry.
     * @param {InquiryUpdateArgs} args - Arguments to update one Inquiry.
     * @example
     * // Update one Inquiry
     * const inquiry = await prisma.inquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InquiryUpdateArgs>(args: SelectSubset<T, InquiryUpdateArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inquiries.
     * @param {InquiryDeleteManyArgs} args - Arguments to filter Inquiries to delete.
     * @example
     * // Delete a few Inquiries
     * const { count } = await prisma.inquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InquiryDeleteManyArgs>(args?: SelectSubset<T, InquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inquiries
     * const inquiry = await prisma.inquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InquiryUpdateManyArgs>(args: SelectSubset<T, InquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inquiry.
     * @param {InquiryUpsertArgs} args - Arguments to update or create a Inquiry.
     * @example
     * // Update or create a Inquiry
     * const inquiry = await prisma.inquiry.upsert({
     *   create: {
     *     // ... data to create a Inquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inquiry we want to update
     *   }
     * })
     */
    upsert<T extends InquiryUpsertArgs>(args: SelectSubset<T, InquiryUpsertArgs<ExtArgs>>): Prisma__InquiryClient<$Result.GetResult<Prisma.$InquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryCountArgs} args - Arguments to filter Inquiries to count.
     * @example
     * // Count the number of Inquiries
     * const count = await prisma.inquiry.count({
     *   where: {
     *     // ... the filter for the Inquiries we want to count
     *   }
     * })
    **/
    count<T extends InquiryCountArgs>(
      args?: Subset<T, InquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InquiryAggregateArgs>(args: Subset<T, InquiryAggregateArgs>): Prisma.PrismaPromise<GetInquiryAggregateType<T>>

    /**
     * Group by Inquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InquiryGroupByArgs['orderBy'] }
        : { orderBy?: InquiryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inquiry model
   */
  readonly fields: InquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inquiry model
   */
  interface InquiryFieldRefs {
    readonly id: FieldRef<"Inquiry", 'BigInt'>
    readonly userId: FieldRef<"Inquiry", 'BigInt'>
    readonly title: FieldRef<"Inquiry", 'String'>
    readonly content: FieldRef<"Inquiry", 'String'>
    readonly status: FieldRef<"Inquiry", 'InquiryStatus'>
    readonly createdAt: FieldRef<"Inquiry", 'DateTime'>
    readonly updatedAt: FieldRef<"Inquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inquiry findUnique
   */
  export type InquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findUniqueOrThrow
   */
  export type InquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry findFirst
   */
  export type InquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findFirstOrThrow
   */
  export type InquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiry to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry findMany
   */
  export type InquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter, which Inquiries to fetch.
     */
    where?: InquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inquiries to fetch.
     */
    orderBy?: InquiryOrderByWithRelationInput | InquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inquiries.
     */
    cursor?: InquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inquiries.
     */
    distinct?: InquiryScalarFieldEnum | InquiryScalarFieldEnum[]
  }

  /**
   * Inquiry create
   */
  export type InquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data needed to create a Inquiry.
     */
    data: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
  }

  /**
   * Inquiry createMany
   */
  export type InquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inquiries.
     */
    data: InquiryCreateManyInput | InquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inquiry update
   */
  export type InquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The data needed to update a Inquiry.
     */
    data: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
    /**
     * Choose, which Inquiry to update.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry updateMany
   */
  export type InquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inquiries.
     */
    data: XOR<InquiryUpdateManyMutationInput, InquiryUncheckedUpdateManyInput>
    /**
     * Filter which Inquiries to update
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to update.
     */
    limit?: number
  }

  /**
   * Inquiry upsert
   */
  export type InquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * The filter to search for the Inquiry to update in case it exists.
     */
    where: InquiryWhereUniqueInput
    /**
     * In case the Inquiry found by the `where` argument doesn't exist, create a new Inquiry with this data.
     */
    create: XOR<InquiryCreateInput, InquiryUncheckedCreateInput>
    /**
     * In case the Inquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InquiryUpdateInput, InquiryUncheckedUpdateInput>
  }

  /**
   * Inquiry delete
   */
  export type InquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
    /**
     * Filter which Inquiry to delete.
     */
    where: InquiryWhereUniqueInput
  }

  /**
   * Inquiry deleteMany
   */
  export type InquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inquiries to delete
     */
    where?: InquiryWhereInput
    /**
     * Limit how many Inquiries to delete.
     */
    limit?: number
  }

  /**
   * Inquiry without action
   */
  export type InquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inquiry
     */
    select?: InquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inquiry
     */
    omit?: InquiryOmit<ExtArgs> | null
  }


  /**
   * Model InquiryImage
   */

  export type AggregateInquiryImage = {
    _count: InquiryImageCountAggregateOutputType | null
    _avg: InquiryImageAvgAggregateOutputType | null
    _sum: InquiryImageSumAggregateOutputType | null
    _min: InquiryImageMinAggregateOutputType | null
    _max: InquiryImageMaxAggregateOutputType | null
  }

  export type InquiryImageAvgAggregateOutputType = {
    id: number | null
    inquiryId: number | null
    imageOrder: number | null
  }

  export type InquiryImageSumAggregateOutputType = {
    id: bigint | null
    inquiryId: bigint | null
    imageOrder: bigint | null
  }

  export type InquiryImageMinAggregateOutputType = {
    id: bigint | null
    inquiryId: bigint | null
    imageUrl: string | null
    imageOrder: bigint | null
    createdAt: Date | null
  }

  export type InquiryImageMaxAggregateOutputType = {
    id: bigint | null
    inquiryId: bigint | null
    imageUrl: string | null
    imageOrder: bigint | null
    createdAt: Date | null
  }

  export type InquiryImageCountAggregateOutputType = {
    id: number
    inquiryId: number
    imageUrl: number
    imageOrder: number
    createdAt: number
    _all: number
  }


  export type InquiryImageAvgAggregateInputType = {
    id?: true
    inquiryId?: true
    imageOrder?: true
  }

  export type InquiryImageSumAggregateInputType = {
    id?: true
    inquiryId?: true
    imageOrder?: true
  }

  export type InquiryImageMinAggregateInputType = {
    id?: true
    inquiryId?: true
    imageUrl?: true
    imageOrder?: true
    createdAt?: true
  }

  export type InquiryImageMaxAggregateInputType = {
    id?: true
    inquiryId?: true
    imageUrl?: true
    imageOrder?: true
    createdAt?: true
  }

  export type InquiryImageCountAggregateInputType = {
    id?: true
    inquiryId?: true
    imageUrl?: true
    imageOrder?: true
    createdAt?: true
    _all?: true
  }

  export type InquiryImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InquiryImage to aggregate.
     */
    where?: InquiryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InquiryImages to fetch.
     */
    orderBy?: InquiryImageOrderByWithRelationInput | InquiryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InquiryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InquiryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InquiryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InquiryImages
    **/
    _count?: true | InquiryImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InquiryImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InquiryImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InquiryImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InquiryImageMaxAggregateInputType
  }

  export type GetInquiryImageAggregateType<T extends InquiryImageAggregateArgs> = {
        [P in keyof T & keyof AggregateInquiryImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInquiryImage[P]>
      : GetScalarType<T[P], AggregateInquiryImage[P]>
  }




  export type InquiryImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InquiryImageWhereInput
    orderBy?: InquiryImageOrderByWithAggregationInput | InquiryImageOrderByWithAggregationInput[]
    by: InquiryImageScalarFieldEnum[] | InquiryImageScalarFieldEnum
    having?: InquiryImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InquiryImageCountAggregateInputType | true
    _avg?: InquiryImageAvgAggregateInputType
    _sum?: InquiryImageSumAggregateInputType
    _min?: InquiryImageMinAggregateInputType
    _max?: InquiryImageMaxAggregateInputType
  }

  export type InquiryImageGroupByOutputType = {
    id: bigint
    inquiryId: bigint
    imageUrl: string
    imageOrder: bigint
    createdAt: Date | null
    _count: InquiryImageCountAggregateOutputType | null
    _avg: InquiryImageAvgAggregateOutputType | null
    _sum: InquiryImageSumAggregateOutputType | null
    _min: InquiryImageMinAggregateOutputType | null
    _max: InquiryImageMaxAggregateOutputType | null
  }

  type GetInquiryImageGroupByPayload<T extends InquiryImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InquiryImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InquiryImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InquiryImageGroupByOutputType[P]>
            : GetScalarType<T[P], InquiryImageGroupByOutputType[P]>
        }
      >
    >


  export type InquiryImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inquiryId?: boolean
    imageUrl?: boolean
    imageOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["inquiryImage"]>



  export type InquiryImageSelectScalar = {
    id?: boolean
    inquiryId?: boolean
    imageUrl?: boolean
    imageOrder?: boolean
    createdAt?: boolean
  }

  export type InquiryImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inquiryId" | "imageUrl" | "imageOrder" | "createdAt", ExtArgs["result"]["inquiryImage"]>

  export type $InquiryImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InquiryImage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      inquiryId: bigint
      imageUrl: string
      imageOrder: bigint
      createdAt: Date | null
    }, ExtArgs["result"]["inquiryImage"]>
    composites: {}
  }

  type InquiryImageGetPayload<S extends boolean | null | undefined | InquiryImageDefaultArgs> = $Result.GetResult<Prisma.$InquiryImagePayload, S>

  type InquiryImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InquiryImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InquiryImageCountAggregateInputType | true
    }

  export interface InquiryImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InquiryImage'], meta: { name: 'InquiryImage' } }
    /**
     * Find zero or one InquiryImage that matches the filter.
     * @param {InquiryImageFindUniqueArgs} args - Arguments to find a InquiryImage
     * @example
     * // Get one InquiryImage
     * const inquiryImage = await prisma.inquiryImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InquiryImageFindUniqueArgs>(args: SelectSubset<T, InquiryImageFindUniqueArgs<ExtArgs>>): Prisma__InquiryImageClient<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InquiryImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InquiryImageFindUniqueOrThrowArgs} args - Arguments to find a InquiryImage
     * @example
     * // Get one InquiryImage
     * const inquiryImage = await prisma.inquiryImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InquiryImageFindUniqueOrThrowArgs>(args: SelectSubset<T, InquiryImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InquiryImageClient<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InquiryImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryImageFindFirstArgs} args - Arguments to find a InquiryImage
     * @example
     * // Get one InquiryImage
     * const inquiryImage = await prisma.inquiryImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InquiryImageFindFirstArgs>(args?: SelectSubset<T, InquiryImageFindFirstArgs<ExtArgs>>): Prisma__InquiryImageClient<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InquiryImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryImageFindFirstOrThrowArgs} args - Arguments to find a InquiryImage
     * @example
     * // Get one InquiryImage
     * const inquiryImage = await prisma.inquiryImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InquiryImageFindFirstOrThrowArgs>(args?: SelectSubset<T, InquiryImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__InquiryImageClient<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InquiryImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InquiryImages
     * const inquiryImages = await prisma.inquiryImage.findMany()
     * 
     * // Get first 10 InquiryImages
     * const inquiryImages = await prisma.inquiryImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inquiryImageWithIdOnly = await prisma.inquiryImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InquiryImageFindManyArgs>(args?: SelectSubset<T, InquiryImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InquiryImage.
     * @param {InquiryImageCreateArgs} args - Arguments to create a InquiryImage.
     * @example
     * // Create one InquiryImage
     * const InquiryImage = await prisma.inquiryImage.create({
     *   data: {
     *     // ... data to create a InquiryImage
     *   }
     * })
     * 
     */
    create<T extends InquiryImageCreateArgs>(args: SelectSubset<T, InquiryImageCreateArgs<ExtArgs>>): Prisma__InquiryImageClient<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InquiryImages.
     * @param {InquiryImageCreateManyArgs} args - Arguments to create many InquiryImages.
     * @example
     * // Create many InquiryImages
     * const inquiryImage = await prisma.inquiryImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InquiryImageCreateManyArgs>(args?: SelectSubset<T, InquiryImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InquiryImage.
     * @param {InquiryImageDeleteArgs} args - Arguments to delete one InquiryImage.
     * @example
     * // Delete one InquiryImage
     * const InquiryImage = await prisma.inquiryImage.delete({
     *   where: {
     *     // ... filter to delete one InquiryImage
     *   }
     * })
     * 
     */
    delete<T extends InquiryImageDeleteArgs>(args: SelectSubset<T, InquiryImageDeleteArgs<ExtArgs>>): Prisma__InquiryImageClient<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InquiryImage.
     * @param {InquiryImageUpdateArgs} args - Arguments to update one InquiryImage.
     * @example
     * // Update one InquiryImage
     * const inquiryImage = await prisma.inquiryImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InquiryImageUpdateArgs>(args: SelectSubset<T, InquiryImageUpdateArgs<ExtArgs>>): Prisma__InquiryImageClient<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InquiryImages.
     * @param {InquiryImageDeleteManyArgs} args - Arguments to filter InquiryImages to delete.
     * @example
     * // Delete a few InquiryImages
     * const { count } = await prisma.inquiryImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InquiryImageDeleteManyArgs>(args?: SelectSubset<T, InquiryImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InquiryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InquiryImages
     * const inquiryImage = await prisma.inquiryImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InquiryImageUpdateManyArgs>(args: SelectSubset<T, InquiryImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InquiryImage.
     * @param {InquiryImageUpsertArgs} args - Arguments to update or create a InquiryImage.
     * @example
     * // Update or create a InquiryImage
     * const inquiryImage = await prisma.inquiryImage.upsert({
     *   create: {
     *     // ... data to create a InquiryImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InquiryImage we want to update
     *   }
     * })
     */
    upsert<T extends InquiryImageUpsertArgs>(args: SelectSubset<T, InquiryImageUpsertArgs<ExtArgs>>): Prisma__InquiryImageClient<$Result.GetResult<Prisma.$InquiryImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InquiryImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryImageCountArgs} args - Arguments to filter InquiryImages to count.
     * @example
     * // Count the number of InquiryImages
     * const count = await prisma.inquiryImage.count({
     *   where: {
     *     // ... the filter for the InquiryImages we want to count
     *   }
     * })
    **/
    count<T extends InquiryImageCountArgs>(
      args?: Subset<T, InquiryImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InquiryImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InquiryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InquiryImageAggregateArgs>(args: Subset<T, InquiryImageAggregateArgs>): Prisma.PrismaPromise<GetInquiryImageAggregateType<T>>

    /**
     * Group by InquiryImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InquiryImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InquiryImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InquiryImageGroupByArgs['orderBy'] }
        : { orderBy?: InquiryImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InquiryImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInquiryImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InquiryImage model
   */
  readonly fields: InquiryImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InquiryImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InquiryImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InquiryImage model
   */
  interface InquiryImageFieldRefs {
    readonly id: FieldRef<"InquiryImage", 'BigInt'>
    readonly inquiryId: FieldRef<"InquiryImage", 'BigInt'>
    readonly imageUrl: FieldRef<"InquiryImage", 'String'>
    readonly imageOrder: FieldRef<"InquiryImage", 'BigInt'>
    readonly createdAt: FieldRef<"InquiryImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InquiryImage findUnique
   */
  export type InquiryImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * Filter, which InquiryImage to fetch.
     */
    where: InquiryImageWhereUniqueInput
  }

  /**
   * InquiryImage findUniqueOrThrow
   */
  export type InquiryImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * Filter, which InquiryImage to fetch.
     */
    where: InquiryImageWhereUniqueInput
  }

  /**
   * InquiryImage findFirst
   */
  export type InquiryImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * Filter, which InquiryImage to fetch.
     */
    where?: InquiryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InquiryImages to fetch.
     */
    orderBy?: InquiryImageOrderByWithRelationInput | InquiryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InquiryImages.
     */
    cursor?: InquiryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InquiryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InquiryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InquiryImages.
     */
    distinct?: InquiryImageScalarFieldEnum | InquiryImageScalarFieldEnum[]
  }

  /**
   * InquiryImage findFirstOrThrow
   */
  export type InquiryImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * Filter, which InquiryImage to fetch.
     */
    where?: InquiryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InquiryImages to fetch.
     */
    orderBy?: InquiryImageOrderByWithRelationInput | InquiryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InquiryImages.
     */
    cursor?: InquiryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InquiryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InquiryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InquiryImages.
     */
    distinct?: InquiryImageScalarFieldEnum | InquiryImageScalarFieldEnum[]
  }

  /**
   * InquiryImage findMany
   */
  export type InquiryImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * Filter, which InquiryImages to fetch.
     */
    where?: InquiryImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InquiryImages to fetch.
     */
    orderBy?: InquiryImageOrderByWithRelationInput | InquiryImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InquiryImages.
     */
    cursor?: InquiryImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InquiryImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InquiryImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InquiryImages.
     */
    distinct?: InquiryImageScalarFieldEnum | InquiryImageScalarFieldEnum[]
  }

  /**
   * InquiryImage create
   */
  export type InquiryImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * The data needed to create a InquiryImage.
     */
    data: XOR<InquiryImageCreateInput, InquiryImageUncheckedCreateInput>
  }

  /**
   * InquiryImage createMany
   */
  export type InquiryImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InquiryImages.
     */
    data: InquiryImageCreateManyInput | InquiryImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InquiryImage update
   */
  export type InquiryImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * The data needed to update a InquiryImage.
     */
    data: XOR<InquiryImageUpdateInput, InquiryImageUncheckedUpdateInput>
    /**
     * Choose, which InquiryImage to update.
     */
    where: InquiryImageWhereUniqueInput
  }

  /**
   * InquiryImage updateMany
   */
  export type InquiryImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InquiryImages.
     */
    data: XOR<InquiryImageUpdateManyMutationInput, InquiryImageUncheckedUpdateManyInput>
    /**
     * Filter which InquiryImages to update
     */
    where?: InquiryImageWhereInput
    /**
     * Limit how many InquiryImages to update.
     */
    limit?: number
  }

  /**
   * InquiryImage upsert
   */
  export type InquiryImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * The filter to search for the InquiryImage to update in case it exists.
     */
    where: InquiryImageWhereUniqueInput
    /**
     * In case the InquiryImage found by the `where` argument doesn't exist, create a new InquiryImage with this data.
     */
    create: XOR<InquiryImageCreateInput, InquiryImageUncheckedCreateInput>
    /**
     * In case the InquiryImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InquiryImageUpdateInput, InquiryImageUncheckedUpdateInput>
  }

  /**
   * InquiryImage delete
   */
  export type InquiryImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
    /**
     * Filter which InquiryImage to delete.
     */
    where: InquiryImageWhereUniqueInput
  }

  /**
   * InquiryImage deleteMany
   */
  export type InquiryImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InquiryImages to delete
     */
    where?: InquiryImageWhereInput
    /**
     * Limit how many InquiryImages to delete.
     */
    limit?: number
  }

  /**
   * InquiryImage without action
   */
  export type InquiryImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InquiryImage
     */
    select?: InquiryImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InquiryImage
     */
    omit?: InquiryImageOmit<ExtArgs> | null
  }


  /**
   * Model Mission
   */

  export type AggregateMission = {
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  export type MissionAvgAggregateOutputType = {
    id: number | null
    storeId: number | null
    rewardPoint: number | null
    deadline: number | null
  }

  export type MissionSumAggregateOutputType = {
    id: bigint | null
    storeId: bigint | null
    rewardPoint: bigint | null
    deadline: bigint | null
  }

  export type MissionMinAggregateOutputType = {
    id: bigint | null
    storeId: bigint | null
    content: string | null
    rewardPoint: bigint | null
    deadline: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissionMaxAggregateOutputType = {
    id: bigint | null
    storeId: bigint | null
    content: string | null
    rewardPoint: bigint | null
    deadline: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MissionCountAggregateOutputType = {
    id: number
    storeId: number
    content: number
    rewardPoint: number
    deadline: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MissionAvgAggregateInputType = {
    id?: true
    storeId?: true
    rewardPoint?: true
    deadline?: true
  }

  export type MissionSumAggregateInputType = {
    id?: true
    storeId?: true
    rewardPoint?: true
    deadline?: true
  }

  export type MissionMinAggregateInputType = {
    id?: true
    storeId?: true
    content?: true
    rewardPoint?: true
    deadline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissionMaxAggregateInputType = {
    id?: true
    storeId?: true
    content?: true
    rewardPoint?: true
    deadline?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MissionCountAggregateInputType = {
    id?: true
    storeId?: true
    content?: true
    rewardPoint?: true
    deadline?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mission to aggregate.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Missions
    **/
    _count?: true | MissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MissionMaxAggregateInputType
  }

  export type GetMissionAggregateType<T extends MissionAggregateArgs> = {
        [P in keyof T & keyof AggregateMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMission[P]>
      : GetScalarType<T[P], AggregateMission[P]>
  }




  export type MissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MissionWhereInput
    orderBy?: MissionOrderByWithAggregationInput | MissionOrderByWithAggregationInput[]
    by: MissionScalarFieldEnum[] | MissionScalarFieldEnum
    having?: MissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MissionCountAggregateInputType | true
    _avg?: MissionAvgAggregateInputType
    _sum?: MissionSumAggregateInputType
    _min?: MissionMinAggregateInputType
    _max?: MissionMaxAggregateInputType
  }

  export type MissionGroupByOutputType = {
    id: bigint
    storeId: bigint
    content: string
    rewardPoint: bigint
    deadline: bigint | null
    createdAt: Date
    updatedAt: Date | null
    _count: MissionCountAggregateOutputType | null
    _avg: MissionAvgAggregateOutputType | null
    _sum: MissionSumAggregateOutputType | null
    _min: MissionMinAggregateOutputType | null
    _max: MissionMaxAggregateOutputType | null
  }

  type GetMissionGroupByPayload<T extends MissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MissionGroupByOutputType[P]>
            : GetScalarType<T[P], MissionGroupByOutputType[P]>
        }
      >
    >


  export type MissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    content?: boolean
    rewardPoint?: boolean
    deadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mission"]>



  export type MissionSelectScalar = {
    id?: boolean
    storeId?: boolean
    content?: boolean
    rewardPoint?: boolean
    deadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "content" | "rewardPoint" | "deadline" | "createdAt" | "updatedAt", ExtArgs["result"]["mission"]>

  export type $MissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      storeId: bigint
      content: string
      rewardPoint: bigint
      deadline: bigint | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["mission"]>
    composites: {}
  }

  type MissionGetPayload<S extends boolean | null | undefined | MissionDefaultArgs> = $Result.GetResult<Prisma.$MissionPayload, S>

  type MissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MissionCountAggregateInputType | true
    }

  export interface MissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mission'], meta: { name: 'Mission' } }
    /**
     * Find zero or one Mission that matches the filter.
     * @param {MissionFindUniqueArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MissionFindUniqueArgs>(args: SelectSubset<T, MissionFindUniqueArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MissionFindUniqueOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MissionFindUniqueOrThrowArgs>(args: SelectSubset<T, MissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MissionFindFirstArgs>(args?: SelectSubset<T, MissionFindFirstArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindFirstOrThrowArgs} args - Arguments to find a Mission
     * @example
     * // Get one Mission
     * const mission = await prisma.mission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MissionFindFirstOrThrowArgs>(args?: SelectSubset<T, MissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Missions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Missions
     * const missions = await prisma.mission.findMany()
     * 
     * // Get first 10 Missions
     * const missions = await prisma.mission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const missionWithIdOnly = await prisma.mission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MissionFindManyArgs>(args?: SelectSubset<T, MissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mission.
     * @param {MissionCreateArgs} args - Arguments to create a Mission.
     * @example
     * // Create one Mission
     * const Mission = await prisma.mission.create({
     *   data: {
     *     // ... data to create a Mission
     *   }
     * })
     * 
     */
    create<T extends MissionCreateArgs>(args: SelectSubset<T, MissionCreateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Missions.
     * @param {MissionCreateManyArgs} args - Arguments to create many Missions.
     * @example
     * // Create many Missions
     * const mission = await prisma.mission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MissionCreateManyArgs>(args?: SelectSubset<T, MissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mission.
     * @param {MissionDeleteArgs} args - Arguments to delete one Mission.
     * @example
     * // Delete one Mission
     * const Mission = await prisma.mission.delete({
     *   where: {
     *     // ... filter to delete one Mission
     *   }
     * })
     * 
     */
    delete<T extends MissionDeleteArgs>(args: SelectSubset<T, MissionDeleteArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mission.
     * @param {MissionUpdateArgs} args - Arguments to update one Mission.
     * @example
     * // Update one Mission
     * const mission = await prisma.mission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MissionUpdateArgs>(args: SelectSubset<T, MissionUpdateArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Missions.
     * @param {MissionDeleteManyArgs} args - Arguments to filter Missions to delete.
     * @example
     * // Delete a few Missions
     * const { count } = await prisma.mission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MissionDeleteManyArgs>(args?: SelectSubset<T, MissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Missions
     * const mission = await prisma.mission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MissionUpdateManyArgs>(args: SelectSubset<T, MissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mission.
     * @param {MissionUpsertArgs} args - Arguments to update or create a Mission.
     * @example
     * // Update or create a Mission
     * const mission = await prisma.mission.upsert({
     *   create: {
     *     // ... data to create a Mission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mission we want to update
     *   }
     * })
     */
    upsert<T extends MissionUpsertArgs>(args: SelectSubset<T, MissionUpsertArgs<ExtArgs>>): Prisma__MissionClient<$Result.GetResult<Prisma.$MissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Missions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionCountArgs} args - Arguments to filter Missions to count.
     * @example
     * // Count the number of Missions
     * const count = await prisma.mission.count({
     *   where: {
     *     // ... the filter for the Missions we want to count
     *   }
     * })
    **/
    count<T extends MissionCountArgs>(
      args?: Subset<T, MissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MissionAggregateArgs>(args: Subset<T, MissionAggregateArgs>): Prisma.PrismaPromise<GetMissionAggregateType<T>>

    /**
     * Group by Mission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MissionGroupByArgs['orderBy'] }
        : { orderBy?: MissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mission model
   */
  readonly fields: MissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Mission model
   */
  interface MissionFieldRefs {
    readonly id: FieldRef<"Mission", 'BigInt'>
    readonly storeId: FieldRef<"Mission", 'BigInt'>
    readonly content: FieldRef<"Mission", 'String'>
    readonly rewardPoint: FieldRef<"Mission", 'BigInt'>
    readonly deadline: FieldRef<"Mission", 'BigInt'>
    readonly createdAt: FieldRef<"Mission", 'DateTime'>
    readonly updatedAt: FieldRef<"Mission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mission findUnique
   */
  export type MissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findUniqueOrThrow
   */
  export type MissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission findFirst
   */
  export type MissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findFirstOrThrow
   */
  export type MissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter, which Mission to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission findMany
   */
  export type MissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter, which Missions to fetch.
     */
    where?: MissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Missions to fetch.
     */
    orderBy?: MissionOrderByWithRelationInput | MissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Missions.
     */
    cursor?: MissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Missions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Missions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Missions.
     */
    distinct?: MissionScalarFieldEnum | MissionScalarFieldEnum[]
  }

  /**
   * Mission create
   */
  export type MissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The data needed to create a Mission.
     */
    data: XOR<MissionCreateInput, MissionUncheckedCreateInput>
  }

  /**
   * Mission createMany
   */
  export type MissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Missions.
     */
    data: MissionCreateManyInput | MissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mission update
   */
  export type MissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The data needed to update a Mission.
     */
    data: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
    /**
     * Choose, which Mission to update.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission updateMany
   */
  export type MissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Missions.
     */
    data: XOR<MissionUpdateManyMutationInput, MissionUncheckedUpdateManyInput>
    /**
     * Filter which Missions to update
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to update.
     */
    limit?: number
  }

  /**
   * Mission upsert
   */
  export type MissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * The filter to search for the Mission to update in case it exists.
     */
    where: MissionWhereUniqueInput
    /**
     * In case the Mission found by the `where` argument doesn't exist, create a new Mission with this data.
     */
    create: XOR<MissionCreateInput, MissionUncheckedCreateInput>
    /**
     * In case the Mission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MissionUpdateInput, MissionUncheckedUpdateInput>
  }

  /**
   * Mission delete
   */
  export type MissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
    /**
     * Filter which Mission to delete.
     */
    where: MissionWhereUniqueInput
  }

  /**
   * Mission deleteMany
   */
  export type MissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Missions to delete
     */
    where?: MissionWhereInput
    /**
     * Limit how many Missions to delete.
     */
    limit?: number
  }

  /**
   * Mission without action
   */
  export type MissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mission
     */
    select?: MissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mission
     */
    omit?: MissionOmit<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    reviewId: number | null
    missionId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    reviewId: bigint | null
    missionId: bigint | null
  }

  export type NotificationMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    reviewId: bigint | null
    missionId: bigint | null
    type: string | null
    content: string | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    reviewId: bigint | null
    missionId: bigint | null
    type: string | null
    content: string | null
    isRead: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    reviewId: number
    missionId: number
    type: number
    content: number
    isRead: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
    reviewId?: true
    missionId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
    reviewId?: true
    missionId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    reviewId?: true
    missionId?: true
    type?: true
    content?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    reviewId?: true
    missionId?: true
    type?: true
    content?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    reviewId?: true
    missionId?: true
    type?: true
    content?: true
    isRead?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: bigint
    userId: bigint
    reviewId: bigint | null
    missionId: bigint | null
    type: string
    content: string
    isRead: boolean | null
    createdAt: Date
    updatedAt: Date | null
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reviewId?: boolean
    missionId?: boolean
    type?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    reviewId?: boolean
    missionId?: boolean
    type?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "reviewId" | "missionId" | "type" | "content" | "isRead" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: bigint
      reviewId: bigint | null
      missionId: bigint | null
      type: string
      content: string
      isRead: boolean | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'BigInt'>
    readonly userId: FieldRef<"Notification", 'BigInt'>
    readonly reviewId: FieldRef<"Notification", 'BigInt'>
    readonly missionId: FieldRef<"Notification", 'BigInt'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly content: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
  }


  /**
   * Model PointHistory
   */

  export type AggregatePointHistory = {
    _count: PointHistoryCountAggregateOutputType | null
    _avg: PointHistoryAvgAggregateOutputType | null
    _sum: PointHistorySumAggregateOutputType | null
    _min: PointHistoryMinAggregateOutputType | null
    _max: PointHistoryMaxAggregateOutputType | null
  }

  export type PointHistoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    point: number | null
  }

  export type PointHistorySumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    point: bigint | null
  }

  export type PointHistoryMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    type: string | null
    point: bigint | null
    storeName: string | null
    missionContent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PointHistoryMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    type: string | null
    point: bigint | null
    storeName: string | null
    missionContent: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PointHistoryCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    point: number
    storeName: number
    missionContent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PointHistoryAvgAggregateInputType = {
    id?: true
    userId?: true
    point?: true
  }

  export type PointHistorySumAggregateInputType = {
    id?: true
    userId?: true
    point?: true
  }

  export type PointHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    point?: true
    storeName?: true
    missionContent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PointHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    point?: true
    storeName?: true
    missionContent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PointHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    point?: true
    storeName?: true
    missionContent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PointHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointHistory to aggregate.
     */
    where?: PointHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointHistories to fetch.
     */
    orderBy?: PointHistoryOrderByWithRelationInput | PointHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PointHistories
    **/
    _count?: true | PointHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointHistoryMaxAggregateInputType
  }

  export type GetPointHistoryAggregateType<T extends PointHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePointHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePointHistory[P]>
      : GetScalarType<T[P], AggregatePointHistory[P]>
  }




  export type PointHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointHistoryWhereInput
    orderBy?: PointHistoryOrderByWithAggregationInput | PointHistoryOrderByWithAggregationInput[]
    by: PointHistoryScalarFieldEnum[] | PointHistoryScalarFieldEnum
    having?: PointHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointHistoryCountAggregateInputType | true
    _avg?: PointHistoryAvgAggregateInputType
    _sum?: PointHistorySumAggregateInputType
    _min?: PointHistoryMinAggregateInputType
    _max?: PointHistoryMaxAggregateInputType
  }

  export type PointHistoryGroupByOutputType = {
    id: bigint
    userId: bigint
    type: string
    point: bigint
    storeName: string | null
    missionContent: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: PointHistoryCountAggregateOutputType | null
    _avg: PointHistoryAvgAggregateOutputType | null
    _sum: PointHistorySumAggregateOutputType | null
    _min: PointHistoryMinAggregateOutputType | null
    _max: PointHistoryMaxAggregateOutputType | null
  }

  type GetPointHistoryGroupByPayload<T extends PointHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PointHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PointHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    point?: boolean
    storeName?: boolean
    missionContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pointHistory"]>



  export type PointHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    point?: boolean
    storeName?: boolean
    missionContent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PointHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "point" | "storeName" | "missionContent" | "createdAt" | "updatedAt", ExtArgs["result"]["pointHistory"]>

  export type $PointHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PointHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: bigint
      type: string
      point: bigint
      storeName: string | null
      missionContent: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["pointHistory"]>
    composites: {}
  }

  type PointHistoryGetPayload<S extends boolean | null | undefined | PointHistoryDefaultArgs> = $Result.GetResult<Prisma.$PointHistoryPayload, S>

  type PointHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointHistoryCountAggregateInputType | true
    }

  export interface PointHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PointHistory'], meta: { name: 'PointHistory' } }
    /**
     * Find zero or one PointHistory that matches the filter.
     * @param {PointHistoryFindUniqueArgs} args - Arguments to find a PointHistory
     * @example
     * // Get one PointHistory
     * const pointHistory = await prisma.pointHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointHistoryFindUniqueArgs>(args: SelectSubset<T, PointHistoryFindUniqueArgs<ExtArgs>>): Prisma__PointHistoryClient<$Result.GetResult<Prisma.$PointHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PointHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointHistoryFindUniqueOrThrowArgs} args - Arguments to find a PointHistory
     * @example
     * // Get one PointHistory
     * const pointHistory = await prisma.pointHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PointHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointHistoryClient<$Result.GetResult<Prisma.$PointHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointHistoryFindFirstArgs} args - Arguments to find a PointHistory
     * @example
     * // Get one PointHistory
     * const pointHistory = await prisma.pointHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointHistoryFindFirstArgs>(args?: SelectSubset<T, PointHistoryFindFirstArgs<ExtArgs>>): Prisma__PointHistoryClient<$Result.GetResult<Prisma.$PointHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PointHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointHistoryFindFirstOrThrowArgs} args - Arguments to find a PointHistory
     * @example
     * // Get one PointHistory
     * const pointHistory = await prisma.pointHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PointHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointHistoryClient<$Result.GetResult<Prisma.$PointHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PointHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PointHistories
     * const pointHistories = await prisma.pointHistory.findMany()
     * 
     * // Get first 10 PointHistories
     * const pointHistories = await prisma.pointHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointHistoryWithIdOnly = await prisma.pointHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointHistoryFindManyArgs>(args?: SelectSubset<T, PointHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PointHistory.
     * @param {PointHistoryCreateArgs} args - Arguments to create a PointHistory.
     * @example
     * // Create one PointHistory
     * const PointHistory = await prisma.pointHistory.create({
     *   data: {
     *     // ... data to create a PointHistory
     *   }
     * })
     * 
     */
    create<T extends PointHistoryCreateArgs>(args: SelectSubset<T, PointHistoryCreateArgs<ExtArgs>>): Prisma__PointHistoryClient<$Result.GetResult<Prisma.$PointHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PointHistories.
     * @param {PointHistoryCreateManyArgs} args - Arguments to create many PointHistories.
     * @example
     * // Create many PointHistories
     * const pointHistory = await prisma.pointHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointHistoryCreateManyArgs>(args?: SelectSubset<T, PointHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PointHistory.
     * @param {PointHistoryDeleteArgs} args - Arguments to delete one PointHistory.
     * @example
     * // Delete one PointHistory
     * const PointHistory = await prisma.pointHistory.delete({
     *   where: {
     *     // ... filter to delete one PointHistory
     *   }
     * })
     * 
     */
    delete<T extends PointHistoryDeleteArgs>(args: SelectSubset<T, PointHistoryDeleteArgs<ExtArgs>>): Prisma__PointHistoryClient<$Result.GetResult<Prisma.$PointHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PointHistory.
     * @param {PointHistoryUpdateArgs} args - Arguments to update one PointHistory.
     * @example
     * // Update one PointHistory
     * const pointHistory = await prisma.pointHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointHistoryUpdateArgs>(args: SelectSubset<T, PointHistoryUpdateArgs<ExtArgs>>): Prisma__PointHistoryClient<$Result.GetResult<Prisma.$PointHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PointHistories.
     * @param {PointHistoryDeleteManyArgs} args - Arguments to filter PointHistories to delete.
     * @example
     * // Delete a few PointHistories
     * const { count } = await prisma.pointHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointHistoryDeleteManyArgs>(args?: SelectSubset<T, PointHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PointHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PointHistories
     * const pointHistory = await prisma.pointHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointHistoryUpdateManyArgs>(args: SelectSubset<T, PointHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PointHistory.
     * @param {PointHistoryUpsertArgs} args - Arguments to update or create a PointHistory.
     * @example
     * // Update or create a PointHistory
     * const pointHistory = await prisma.pointHistory.upsert({
     *   create: {
     *     // ... data to create a PointHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PointHistory we want to update
     *   }
     * })
     */
    upsert<T extends PointHistoryUpsertArgs>(args: SelectSubset<T, PointHistoryUpsertArgs<ExtArgs>>): Prisma__PointHistoryClient<$Result.GetResult<Prisma.$PointHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PointHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointHistoryCountArgs} args - Arguments to filter PointHistories to count.
     * @example
     * // Count the number of PointHistories
     * const count = await prisma.pointHistory.count({
     *   where: {
     *     // ... the filter for the PointHistories we want to count
     *   }
     * })
    **/
    count<T extends PointHistoryCountArgs>(
      args?: Subset<T, PointHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PointHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PointHistoryAggregateArgs>(args: Subset<T, PointHistoryAggregateArgs>): Prisma.PrismaPromise<GetPointHistoryAggregateType<T>>

    /**
     * Group by PointHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PointHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PointHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PointHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PointHistory model
   */
  readonly fields: PointHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PointHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PointHistory model
   */
  interface PointHistoryFieldRefs {
    readonly id: FieldRef<"PointHistory", 'BigInt'>
    readonly userId: FieldRef<"PointHistory", 'BigInt'>
    readonly type: FieldRef<"PointHistory", 'String'>
    readonly point: FieldRef<"PointHistory", 'BigInt'>
    readonly storeName: FieldRef<"PointHistory", 'String'>
    readonly missionContent: FieldRef<"PointHistory", 'String'>
    readonly createdAt: FieldRef<"PointHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"PointHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PointHistory findUnique
   */
  export type PointHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointHistory
     */
    select?: PointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointHistory
     */
    omit?: PointHistoryOmit<ExtArgs> | null
    /**
     * Filter, which PointHistory to fetch.
     */
    where: PointHistoryWhereUniqueInput
  }

  /**
   * PointHistory findUniqueOrThrow
   */
  export type PointHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointHistory
     */
    select?: PointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointHistory
     */
    omit?: PointHistoryOmit<ExtArgs> | null
    /**
     * Filter, which PointHistory to fetch.
     */
    where: PointHistoryWhereUniqueInput
  }

  /**
   * PointHistory findFirst
   */
  export type PointHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointHistory
     */
    select?: PointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointHistory
     */
    omit?: PointHistoryOmit<ExtArgs> | null
    /**
     * Filter, which PointHistory to fetch.
     */
    where?: PointHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointHistories to fetch.
     */
    orderBy?: PointHistoryOrderByWithRelationInput | PointHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointHistories.
     */
    cursor?: PointHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointHistories.
     */
    distinct?: PointHistoryScalarFieldEnum | PointHistoryScalarFieldEnum[]
  }

  /**
   * PointHistory findFirstOrThrow
   */
  export type PointHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointHistory
     */
    select?: PointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointHistory
     */
    omit?: PointHistoryOmit<ExtArgs> | null
    /**
     * Filter, which PointHistory to fetch.
     */
    where?: PointHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointHistories to fetch.
     */
    orderBy?: PointHistoryOrderByWithRelationInput | PointHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PointHistories.
     */
    cursor?: PointHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointHistories.
     */
    distinct?: PointHistoryScalarFieldEnum | PointHistoryScalarFieldEnum[]
  }

  /**
   * PointHistory findMany
   */
  export type PointHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointHistory
     */
    select?: PointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointHistory
     */
    omit?: PointHistoryOmit<ExtArgs> | null
    /**
     * Filter, which PointHistories to fetch.
     */
    where?: PointHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PointHistories to fetch.
     */
    orderBy?: PointHistoryOrderByWithRelationInput | PointHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PointHistories.
     */
    cursor?: PointHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PointHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PointHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PointHistories.
     */
    distinct?: PointHistoryScalarFieldEnum | PointHistoryScalarFieldEnum[]
  }

  /**
   * PointHistory create
   */
  export type PointHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointHistory
     */
    select?: PointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointHistory
     */
    omit?: PointHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a PointHistory.
     */
    data: XOR<PointHistoryCreateInput, PointHistoryUncheckedCreateInput>
  }

  /**
   * PointHistory createMany
   */
  export type PointHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PointHistories.
     */
    data: PointHistoryCreateManyInput | PointHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PointHistory update
   */
  export type PointHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointHistory
     */
    select?: PointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointHistory
     */
    omit?: PointHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a PointHistory.
     */
    data: XOR<PointHistoryUpdateInput, PointHistoryUncheckedUpdateInput>
    /**
     * Choose, which PointHistory to update.
     */
    where: PointHistoryWhereUniqueInput
  }

  /**
   * PointHistory updateMany
   */
  export type PointHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PointHistories.
     */
    data: XOR<PointHistoryUpdateManyMutationInput, PointHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PointHistories to update
     */
    where?: PointHistoryWhereInput
    /**
     * Limit how many PointHistories to update.
     */
    limit?: number
  }

  /**
   * PointHistory upsert
   */
  export type PointHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointHistory
     */
    select?: PointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointHistory
     */
    omit?: PointHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the PointHistory to update in case it exists.
     */
    where: PointHistoryWhereUniqueInput
    /**
     * In case the PointHistory found by the `where` argument doesn't exist, create a new PointHistory with this data.
     */
    create: XOR<PointHistoryCreateInput, PointHistoryUncheckedCreateInput>
    /**
     * In case the PointHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointHistoryUpdateInput, PointHistoryUncheckedUpdateInput>
  }

  /**
   * PointHistory delete
   */
  export type PointHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointHistory
     */
    select?: PointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointHistory
     */
    omit?: PointHistoryOmit<ExtArgs> | null
    /**
     * Filter which PointHistory to delete.
     */
    where: PointHistoryWhereUniqueInput
  }

  /**
   * PointHistory deleteMany
   */
  export type PointHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PointHistories to delete
     */
    where?: PointHistoryWhereInput
    /**
     * Limit how many PointHistories to delete.
     */
    limit?: number
  }

  /**
   * PointHistory without action
   */
  export type PointHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointHistory
     */
    select?: PointHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PointHistory
     */
    omit?: PointHistoryOmit<ExtArgs> | null
  }


  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionAvgAggregateOutputType = {
    id: number | null
  }

  export type RegionSumAggregateOutputType = {
    id: bigint | null
  }

  export type RegionMinAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type RegionMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RegionAvgAggregateInputType = {
    id?: true
  }

  export type RegionSumAggregateInputType = {
    id?: true
  }

  export type RegionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _avg?: RegionAvgAggregateInputType
    _sum?: RegionSumAggregateInputType
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: bigint
    name: string
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["region"]>



  export type RegionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["region"]>

  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionFindUniqueArgs>(args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionFindFirstArgs>(args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionFindManyArgs>(args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends RegionCreateArgs>(args: SelectSubset<T, RegionCreateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionCreateManyArgs>(args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends RegionDeleteArgs>(args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionUpdateArgs>(args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionDeleteManyArgs>(args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionUpdateManyArgs>(args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends RegionUpsertArgs>(args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Region model
   */
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'BigInt'>
    readonly name: FieldRef<"Region", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }

  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }

  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to delete.
     */
    limit?: number
  }

  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    storeId: number | null
    userId: number | null
    rating: Decimal | null
  }

  export type ReviewSumAggregateOutputType = {
    id: bigint | null
    storeId: bigint | null
    userId: bigint | null
    rating: Decimal | null
  }

  export type ReviewMinAggregateOutputType = {
    id: bigint | null
    storeId: bigint | null
    userId: bigint | null
    rating: Decimal | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: bigint | null
    storeId: bigint | null
    userId: bigint | null
    rating: Decimal | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    storeId: number
    userId: number
    rating: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    storeId?: true
    userId?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    storeId?: true
    userId?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    storeId?: true
    userId?: true
    rating?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    storeId?: true
    userId?: true
    rating?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    storeId?: true
    userId?: true
    rating?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: bigint
    storeId: bigint
    userId: bigint
    rating: Decimal
    content: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    userId?: boolean
    rating?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    storeId?: boolean
    userId?: boolean
    rating?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "userId" | "rating" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      storeId: bigint
      userId: bigint
      rating: Prisma.Decimal
      content: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'BigInt'>
    readonly storeId: FieldRef<"Review", 'BigInt'>
    readonly userId: FieldRef<"Review", 'BigInt'>
    readonly rating: FieldRef<"Review", 'Decimal'>
    readonly content: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
  }


  /**
   * Model ReviewComment
   */

  export type AggregateReviewComment = {
    _count: ReviewCommentCountAggregateOutputType | null
    _avg: ReviewCommentAvgAggregateOutputType | null
    _sum: ReviewCommentSumAggregateOutputType | null
    _min: ReviewCommentMinAggregateOutputType | null
    _max: ReviewCommentMaxAggregateOutputType | null
  }

  export type ReviewCommentAvgAggregateOutputType = {
    id: number | null
    reviewId: number | null
  }

  export type ReviewCommentSumAggregateOutputType = {
    id: bigint | null
    reviewId: bigint | null
  }

  export type ReviewCommentMinAggregateOutputType = {
    id: bigint | null
    reviewId: bigint | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCommentMaxAggregateOutputType = {
    id: bigint | null
    reviewId: bigint | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCommentCountAggregateOutputType = {
    id: number
    reviewId: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewCommentAvgAggregateInputType = {
    id?: true
    reviewId?: true
  }

  export type ReviewCommentSumAggregateInputType = {
    id?: true
    reviewId?: true
  }

  export type ReviewCommentMinAggregateInputType = {
    id?: true
    reviewId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCommentMaxAggregateInputType = {
    id?: true
    reviewId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCommentCountAggregateInputType = {
    id?: true
    reviewId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewComment to aggregate.
     */
    where?: ReviewCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewComments to fetch.
     */
    orderBy?: ReviewCommentOrderByWithRelationInput | ReviewCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewComments
    **/
    _count?: true | ReviewCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewCommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewCommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewCommentMaxAggregateInputType
  }

  export type GetReviewCommentAggregateType<T extends ReviewCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewComment[P]>
      : GetScalarType<T[P], AggregateReviewComment[P]>
  }




  export type ReviewCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewCommentWhereInput
    orderBy?: ReviewCommentOrderByWithAggregationInput | ReviewCommentOrderByWithAggregationInput[]
    by: ReviewCommentScalarFieldEnum[] | ReviewCommentScalarFieldEnum
    having?: ReviewCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCommentCountAggregateInputType | true
    _avg?: ReviewCommentAvgAggregateInputType
    _sum?: ReviewCommentSumAggregateInputType
    _min?: ReviewCommentMinAggregateInputType
    _max?: ReviewCommentMaxAggregateInputType
  }

  export type ReviewCommentGroupByOutputType = {
    id: bigint
    reviewId: bigint
    content: string | null
    createdAt: Date
    updatedAt: Date | null
    _count: ReviewCommentCountAggregateOutputType | null
    _avg: ReviewCommentAvgAggregateOutputType | null
    _sum: ReviewCommentSumAggregateOutputType | null
    _min: ReviewCommentMinAggregateOutputType | null
    _max: ReviewCommentMaxAggregateOutputType | null
  }

  type GetReviewCommentGroupByPayload<T extends ReviewCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewCommentGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewCommentGroupByOutputType[P]>
        }
      >
    >


  export type ReviewCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reviewComment"]>



  export type ReviewCommentSelectScalar = {
    id?: boolean
    reviewId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewId" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["reviewComment"]>

  export type $ReviewCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewComment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      reviewId: bigint
      content: string | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["reviewComment"]>
    composites: {}
  }

  type ReviewCommentGetPayload<S extends boolean | null | undefined | ReviewCommentDefaultArgs> = $Result.GetResult<Prisma.$ReviewCommentPayload, S>

  type ReviewCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCommentCountAggregateInputType | true
    }

  export interface ReviewCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewComment'], meta: { name: 'ReviewComment' } }
    /**
     * Find zero or one ReviewComment that matches the filter.
     * @param {ReviewCommentFindUniqueArgs} args - Arguments to find a ReviewComment
     * @example
     * // Get one ReviewComment
     * const reviewComment = await prisma.reviewComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewCommentFindUniqueArgs>(args: SelectSubset<T, ReviewCommentFindUniqueArgs<ExtArgs>>): Prisma__ReviewCommentClient<$Result.GetResult<Prisma.$ReviewCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewCommentFindUniqueOrThrowArgs} args - Arguments to find a ReviewComment
     * @example
     * // Get one ReviewComment
     * const reviewComment = await prisma.reviewComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewCommentClient<$Result.GetResult<Prisma.$ReviewCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCommentFindFirstArgs} args - Arguments to find a ReviewComment
     * @example
     * // Get one ReviewComment
     * const reviewComment = await prisma.reviewComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewCommentFindFirstArgs>(args?: SelectSubset<T, ReviewCommentFindFirstArgs<ExtArgs>>): Prisma__ReviewCommentClient<$Result.GetResult<Prisma.$ReviewCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCommentFindFirstOrThrowArgs} args - Arguments to find a ReviewComment
     * @example
     * // Get one ReviewComment
     * const reviewComment = await prisma.reviewComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewCommentClient<$Result.GetResult<Prisma.$ReviewCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewComments
     * const reviewComments = await prisma.reviewComment.findMany()
     * 
     * // Get first 10 ReviewComments
     * const reviewComments = await prisma.reviewComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewCommentWithIdOnly = await prisma.reviewComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewCommentFindManyArgs>(args?: SelectSubset<T, ReviewCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewComment.
     * @param {ReviewCommentCreateArgs} args - Arguments to create a ReviewComment.
     * @example
     * // Create one ReviewComment
     * const ReviewComment = await prisma.reviewComment.create({
     *   data: {
     *     // ... data to create a ReviewComment
     *   }
     * })
     * 
     */
    create<T extends ReviewCommentCreateArgs>(args: SelectSubset<T, ReviewCommentCreateArgs<ExtArgs>>): Prisma__ReviewCommentClient<$Result.GetResult<Prisma.$ReviewCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewComments.
     * @param {ReviewCommentCreateManyArgs} args - Arguments to create many ReviewComments.
     * @example
     * // Create many ReviewComments
     * const reviewComment = await prisma.reviewComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCommentCreateManyArgs>(args?: SelectSubset<T, ReviewCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReviewComment.
     * @param {ReviewCommentDeleteArgs} args - Arguments to delete one ReviewComment.
     * @example
     * // Delete one ReviewComment
     * const ReviewComment = await prisma.reviewComment.delete({
     *   where: {
     *     // ... filter to delete one ReviewComment
     *   }
     * })
     * 
     */
    delete<T extends ReviewCommentDeleteArgs>(args: SelectSubset<T, ReviewCommentDeleteArgs<ExtArgs>>): Prisma__ReviewCommentClient<$Result.GetResult<Prisma.$ReviewCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewComment.
     * @param {ReviewCommentUpdateArgs} args - Arguments to update one ReviewComment.
     * @example
     * // Update one ReviewComment
     * const reviewComment = await prisma.reviewComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewCommentUpdateArgs>(args: SelectSubset<T, ReviewCommentUpdateArgs<ExtArgs>>): Prisma__ReviewCommentClient<$Result.GetResult<Prisma.$ReviewCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewComments.
     * @param {ReviewCommentDeleteManyArgs} args - Arguments to filter ReviewComments to delete.
     * @example
     * // Delete a few ReviewComments
     * const { count } = await prisma.reviewComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewCommentDeleteManyArgs>(args?: SelectSubset<T, ReviewCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewComments
     * const reviewComment = await prisma.reviewComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewCommentUpdateManyArgs>(args: SelectSubset<T, ReviewCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReviewComment.
     * @param {ReviewCommentUpsertArgs} args - Arguments to update or create a ReviewComment.
     * @example
     * // Update or create a ReviewComment
     * const reviewComment = await prisma.reviewComment.upsert({
     *   create: {
     *     // ... data to create a ReviewComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewComment we want to update
     *   }
     * })
     */
    upsert<T extends ReviewCommentUpsertArgs>(args: SelectSubset<T, ReviewCommentUpsertArgs<ExtArgs>>): Prisma__ReviewCommentClient<$Result.GetResult<Prisma.$ReviewCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCommentCountArgs} args - Arguments to filter ReviewComments to count.
     * @example
     * // Count the number of ReviewComments
     * const count = await prisma.reviewComment.count({
     *   where: {
     *     // ... the filter for the ReviewComments we want to count
     *   }
     * })
    **/
    count<T extends ReviewCommentCountArgs>(
      args?: Subset<T, ReviewCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewCommentAggregateArgs>(args: Subset<T, ReviewCommentAggregateArgs>): Prisma.PrismaPromise<GetReviewCommentAggregateType<T>>

    /**
     * Group by ReviewComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewCommentGroupByArgs['orderBy'] }
        : { orderBy?: ReviewCommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewComment model
   */
  readonly fields: ReviewCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewComment model
   */
  interface ReviewCommentFieldRefs {
    readonly id: FieldRef<"ReviewComment", 'BigInt'>
    readonly reviewId: FieldRef<"ReviewComment", 'BigInt'>
    readonly content: FieldRef<"ReviewComment", 'String'>
    readonly createdAt: FieldRef<"ReviewComment", 'DateTime'>
    readonly updatedAt: FieldRef<"ReviewComment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewComment findUnique
   */
  export type ReviewCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewComment
     */
    select?: ReviewCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewComment
     */
    omit?: ReviewCommentOmit<ExtArgs> | null
    /**
     * Filter, which ReviewComment to fetch.
     */
    where: ReviewCommentWhereUniqueInput
  }

  /**
   * ReviewComment findUniqueOrThrow
   */
  export type ReviewCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewComment
     */
    select?: ReviewCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewComment
     */
    omit?: ReviewCommentOmit<ExtArgs> | null
    /**
     * Filter, which ReviewComment to fetch.
     */
    where: ReviewCommentWhereUniqueInput
  }

  /**
   * ReviewComment findFirst
   */
  export type ReviewCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewComment
     */
    select?: ReviewCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewComment
     */
    omit?: ReviewCommentOmit<ExtArgs> | null
    /**
     * Filter, which ReviewComment to fetch.
     */
    where?: ReviewCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewComments to fetch.
     */
    orderBy?: ReviewCommentOrderByWithRelationInput | ReviewCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewComments.
     */
    cursor?: ReviewCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewComments.
     */
    distinct?: ReviewCommentScalarFieldEnum | ReviewCommentScalarFieldEnum[]
  }

  /**
   * ReviewComment findFirstOrThrow
   */
  export type ReviewCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewComment
     */
    select?: ReviewCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewComment
     */
    omit?: ReviewCommentOmit<ExtArgs> | null
    /**
     * Filter, which ReviewComment to fetch.
     */
    where?: ReviewCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewComments to fetch.
     */
    orderBy?: ReviewCommentOrderByWithRelationInput | ReviewCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewComments.
     */
    cursor?: ReviewCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewComments.
     */
    distinct?: ReviewCommentScalarFieldEnum | ReviewCommentScalarFieldEnum[]
  }

  /**
   * ReviewComment findMany
   */
  export type ReviewCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewComment
     */
    select?: ReviewCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewComment
     */
    omit?: ReviewCommentOmit<ExtArgs> | null
    /**
     * Filter, which ReviewComments to fetch.
     */
    where?: ReviewCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewComments to fetch.
     */
    orderBy?: ReviewCommentOrderByWithRelationInput | ReviewCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewComments.
     */
    cursor?: ReviewCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewComments.
     */
    distinct?: ReviewCommentScalarFieldEnum | ReviewCommentScalarFieldEnum[]
  }

  /**
   * ReviewComment create
   */
  export type ReviewCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewComment
     */
    select?: ReviewCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewComment
     */
    omit?: ReviewCommentOmit<ExtArgs> | null
    /**
     * The data needed to create a ReviewComment.
     */
    data: XOR<ReviewCommentCreateInput, ReviewCommentUncheckedCreateInput>
  }

  /**
   * ReviewComment createMany
   */
  export type ReviewCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewComments.
     */
    data: ReviewCommentCreateManyInput | ReviewCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewComment update
   */
  export type ReviewCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewComment
     */
    select?: ReviewCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewComment
     */
    omit?: ReviewCommentOmit<ExtArgs> | null
    /**
     * The data needed to update a ReviewComment.
     */
    data: XOR<ReviewCommentUpdateInput, ReviewCommentUncheckedUpdateInput>
    /**
     * Choose, which ReviewComment to update.
     */
    where: ReviewCommentWhereUniqueInput
  }

  /**
   * ReviewComment updateMany
   */
  export type ReviewCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewComments.
     */
    data: XOR<ReviewCommentUpdateManyMutationInput, ReviewCommentUncheckedUpdateManyInput>
    /**
     * Filter which ReviewComments to update
     */
    where?: ReviewCommentWhereInput
    /**
     * Limit how many ReviewComments to update.
     */
    limit?: number
  }

  /**
   * ReviewComment upsert
   */
  export type ReviewCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewComment
     */
    select?: ReviewCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewComment
     */
    omit?: ReviewCommentOmit<ExtArgs> | null
    /**
     * The filter to search for the ReviewComment to update in case it exists.
     */
    where: ReviewCommentWhereUniqueInput
    /**
     * In case the ReviewComment found by the `where` argument doesn't exist, create a new ReviewComment with this data.
     */
    create: XOR<ReviewCommentCreateInput, ReviewCommentUncheckedCreateInput>
    /**
     * In case the ReviewComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewCommentUpdateInput, ReviewCommentUncheckedUpdateInput>
  }

  /**
   * ReviewComment delete
   */
  export type ReviewCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewComment
     */
    select?: ReviewCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewComment
     */
    omit?: ReviewCommentOmit<ExtArgs> | null
    /**
     * Filter which ReviewComment to delete.
     */
    where: ReviewCommentWhereUniqueInput
  }

  /**
   * ReviewComment deleteMany
   */
  export type ReviewCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewComments to delete
     */
    where?: ReviewCommentWhereInput
    /**
     * Limit how many ReviewComments to delete.
     */
    limit?: number
  }

  /**
   * ReviewComment without action
   */
  export type ReviewCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewComment
     */
    select?: ReviewCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewComment
     */
    omit?: ReviewCommentOmit<ExtArgs> | null
  }


  /**
   * Model ReviewImage
   */

  export type AggregateReviewImage = {
    _count: ReviewImageCountAggregateOutputType | null
    _avg: ReviewImageAvgAggregateOutputType | null
    _sum: ReviewImageSumAggregateOutputType | null
    _min: ReviewImageMinAggregateOutputType | null
    _max: ReviewImageMaxAggregateOutputType | null
  }

  export type ReviewImageAvgAggregateOutputType = {
    id: number | null
    reviewId: number | null
    imageOrder: number | null
  }

  export type ReviewImageSumAggregateOutputType = {
    id: bigint | null
    reviewId: bigint | null
    imageOrder: bigint | null
  }

  export type ReviewImageMinAggregateOutputType = {
    id: bigint | null
    reviewId: bigint | null
    imageUrl: string | null
    imageOrder: bigint | null
    createdAt: Date | null
  }

  export type ReviewImageMaxAggregateOutputType = {
    id: bigint | null
    reviewId: bigint | null
    imageUrl: string | null
    imageOrder: bigint | null
    createdAt: Date | null
  }

  export type ReviewImageCountAggregateOutputType = {
    id: number
    reviewId: number
    imageUrl: number
    imageOrder: number
    createdAt: number
    _all: number
  }


  export type ReviewImageAvgAggregateInputType = {
    id?: true
    reviewId?: true
    imageOrder?: true
  }

  export type ReviewImageSumAggregateInputType = {
    id?: true
    reviewId?: true
    imageOrder?: true
  }

  export type ReviewImageMinAggregateInputType = {
    id?: true
    reviewId?: true
    imageUrl?: true
    imageOrder?: true
    createdAt?: true
  }

  export type ReviewImageMaxAggregateInputType = {
    id?: true
    reviewId?: true
    imageUrl?: true
    imageOrder?: true
    createdAt?: true
  }

  export type ReviewImageCountAggregateInputType = {
    id?: true
    reviewId?: true
    imageUrl?: true
    imageOrder?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewImage to aggregate.
     */
    where?: ReviewImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewImages to fetch.
     */
    orderBy?: ReviewImageOrderByWithRelationInput | ReviewImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewImages
    **/
    _count?: true | ReviewImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewImageMaxAggregateInputType
  }

  export type GetReviewImageAggregateType<T extends ReviewImageAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewImage[P]>
      : GetScalarType<T[P], AggregateReviewImage[P]>
  }




  export type ReviewImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewImageWhereInput
    orderBy?: ReviewImageOrderByWithAggregationInput | ReviewImageOrderByWithAggregationInput[]
    by: ReviewImageScalarFieldEnum[] | ReviewImageScalarFieldEnum
    having?: ReviewImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewImageCountAggregateInputType | true
    _avg?: ReviewImageAvgAggregateInputType
    _sum?: ReviewImageSumAggregateInputType
    _min?: ReviewImageMinAggregateInputType
    _max?: ReviewImageMaxAggregateInputType
  }

  export type ReviewImageGroupByOutputType = {
    id: bigint
    reviewId: bigint
    imageUrl: string
    imageOrder: bigint
    createdAt: Date | null
    _count: ReviewImageCountAggregateOutputType | null
    _avg: ReviewImageAvgAggregateOutputType | null
    _sum: ReviewImageSumAggregateOutputType | null
    _min: ReviewImageMinAggregateOutputType | null
    _max: ReviewImageMaxAggregateOutputType | null
  }

  type GetReviewImageGroupByPayload<T extends ReviewImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewImageGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewImageGroupByOutputType[P]>
        }
      >
    >


  export type ReviewImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewId?: boolean
    imageUrl?: boolean
    imageOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["reviewImage"]>



  export type ReviewImageSelectScalar = {
    id?: boolean
    reviewId?: boolean
    imageUrl?: boolean
    imageOrder?: boolean
    createdAt?: boolean
  }

  export type ReviewImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewId" | "imageUrl" | "imageOrder" | "createdAt", ExtArgs["result"]["reviewImage"]>

  export type $ReviewImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewImage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      reviewId: bigint
      imageUrl: string
      imageOrder: bigint
      createdAt: Date | null
    }, ExtArgs["result"]["reviewImage"]>
    composites: {}
  }

  type ReviewImageGetPayload<S extends boolean | null | undefined | ReviewImageDefaultArgs> = $Result.GetResult<Prisma.$ReviewImagePayload, S>

  type ReviewImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewImageCountAggregateInputType | true
    }

  export interface ReviewImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewImage'], meta: { name: 'ReviewImage' } }
    /**
     * Find zero or one ReviewImage that matches the filter.
     * @param {ReviewImageFindUniqueArgs} args - Arguments to find a ReviewImage
     * @example
     * // Get one ReviewImage
     * const reviewImage = await prisma.reviewImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewImageFindUniqueArgs>(args: SelectSubset<T, ReviewImageFindUniqueArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewImageFindUniqueOrThrowArgs} args - Arguments to find a ReviewImage
     * @example
     * // Get one ReviewImage
     * const reviewImage = await prisma.reviewImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageFindFirstArgs} args - Arguments to find a ReviewImage
     * @example
     * // Get one ReviewImage
     * const reviewImage = await prisma.reviewImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewImageFindFirstArgs>(args?: SelectSubset<T, ReviewImageFindFirstArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageFindFirstOrThrowArgs} args - Arguments to find a ReviewImage
     * @example
     * // Get one ReviewImage
     * const reviewImage = await prisma.reviewImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewImages
     * const reviewImages = await prisma.reviewImage.findMany()
     * 
     * // Get first 10 ReviewImages
     * const reviewImages = await prisma.reviewImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewImageWithIdOnly = await prisma.reviewImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewImageFindManyArgs>(args?: SelectSubset<T, ReviewImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewImage.
     * @param {ReviewImageCreateArgs} args - Arguments to create a ReviewImage.
     * @example
     * // Create one ReviewImage
     * const ReviewImage = await prisma.reviewImage.create({
     *   data: {
     *     // ... data to create a ReviewImage
     *   }
     * })
     * 
     */
    create<T extends ReviewImageCreateArgs>(args: SelectSubset<T, ReviewImageCreateArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewImages.
     * @param {ReviewImageCreateManyArgs} args - Arguments to create many ReviewImages.
     * @example
     * // Create many ReviewImages
     * const reviewImage = await prisma.reviewImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewImageCreateManyArgs>(args?: SelectSubset<T, ReviewImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReviewImage.
     * @param {ReviewImageDeleteArgs} args - Arguments to delete one ReviewImage.
     * @example
     * // Delete one ReviewImage
     * const ReviewImage = await prisma.reviewImage.delete({
     *   where: {
     *     // ... filter to delete one ReviewImage
     *   }
     * })
     * 
     */
    delete<T extends ReviewImageDeleteArgs>(args: SelectSubset<T, ReviewImageDeleteArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewImage.
     * @param {ReviewImageUpdateArgs} args - Arguments to update one ReviewImage.
     * @example
     * // Update one ReviewImage
     * const reviewImage = await prisma.reviewImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewImageUpdateArgs>(args: SelectSubset<T, ReviewImageUpdateArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewImages.
     * @param {ReviewImageDeleteManyArgs} args - Arguments to filter ReviewImages to delete.
     * @example
     * // Delete a few ReviewImages
     * const { count } = await prisma.reviewImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewImageDeleteManyArgs>(args?: SelectSubset<T, ReviewImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewImages
     * const reviewImage = await prisma.reviewImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewImageUpdateManyArgs>(args: SelectSubset<T, ReviewImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReviewImage.
     * @param {ReviewImageUpsertArgs} args - Arguments to update or create a ReviewImage.
     * @example
     * // Update or create a ReviewImage
     * const reviewImage = await prisma.reviewImage.upsert({
     *   create: {
     *     // ... data to create a ReviewImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewImage we want to update
     *   }
     * })
     */
    upsert<T extends ReviewImageUpsertArgs>(args: SelectSubset<T, ReviewImageUpsertArgs<ExtArgs>>): Prisma__ReviewImageClient<$Result.GetResult<Prisma.$ReviewImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageCountArgs} args - Arguments to filter ReviewImages to count.
     * @example
     * // Count the number of ReviewImages
     * const count = await prisma.reviewImage.count({
     *   where: {
     *     // ... the filter for the ReviewImages we want to count
     *   }
     * })
    **/
    count<T extends ReviewImageCountArgs>(
      args?: Subset<T, ReviewImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewImageAggregateArgs>(args: Subset<T, ReviewImageAggregateArgs>): Prisma.PrismaPromise<GetReviewImageAggregateType<T>>

    /**
     * Group by ReviewImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewImageGroupByArgs['orderBy'] }
        : { orderBy?: ReviewImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewImage model
   */
  readonly fields: ReviewImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewImage model
   */
  interface ReviewImageFieldRefs {
    readonly id: FieldRef<"ReviewImage", 'BigInt'>
    readonly reviewId: FieldRef<"ReviewImage", 'BigInt'>
    readonly imageUrl: FieldRef<"ReviewImage", 'String'>
    readonly imageOrder: FieldRef<"ReviewImage", 'BigInt'>
    readonly createdAt: FieldRef<"ReviewImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewImage findUnique
   */
  export type ReviewImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Filter, which ReviewImage to fetch.
     */
    where: ReviewImageWhereUniqueInput
  }

  /**
   * ReviewImage findUniqueOrThrow
   */
  export type ReviewImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Filter, which ReviewImage to fetch.
     */
    where: ReviewImageWhereUniqueInput
  }

  /**
   * ReviewImage findFirst
   */
  export type ReviewImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Filter, which ReviewImage to fetch.
     */
    where?: ReviewImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewImages to fetch.
     */
    orderBy?: ReviewImageOrderByWithRelationInput | ReviewImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewImages.
     */
    cursor?: ReviewImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewImages.
     */
    distinct?: ReviewImageScalarFieldEnum | ReviewImageScalarFieldEnum[]
  }

  /**
   * ReviewImage findFirstOrThrow
   */
  export type ReviewImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Filter, which ReviewImage to fetch.
     */
    where?: ReviewImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewImages to fetch.
     */
    orderBy?: ReviewImageOrderByWithRelationInput | ReviewImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewImages.
     */
    cursor?: ReviewImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewImages.
     */
    distinct?: ReviewImageScalarFieldEnum | ReviewImageScalarFieldEnum[]
  }

  /**
   * ReviewImage findMany
   */
  export type ReviewImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Filter, which ReviewImages to fetch.
     */
    where?: ReviewImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewImages to fetch.
     */
    orderBy?: ReviewImageOrderByWithRelationInput | ReviewImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewImages.
     */
    cursor?: ReviewImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewImages.
     */
    distinct?: ReviewImageScalarFieldEnum | ReviewImageScalarFieldEnum[]
  }

  /**
   * ReviewImage create
   */
  export type ReviewImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * The data needed to create a ReviewImage.
     */
    data: XOR<ReviewImageCreateInput, ReviewImageUncheckedCreateInput>
  }

  /**
   * ReviewImage createMany
   */
  export type ReviewImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewImages.
     */
    data: ReviewImageCreateManyInput | ReviewImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewImage update
   */
  export type ReviewImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * The data needed to update a ReviewImage.
     */
    data: XOR<ReviewImageUpdateInput, ReviewImageUncheckedUpdateInput>
    /**
     * Choose, which ReviewImage to update.
     */
    where: ReviewImageWhereUniqueInput
  }

  /**
   * ReviewImage updateMany
   */
  export type ReviewImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewImages.
     */
    data: XOR<ReviewImageUpdateManyMutationInput, ReviewImageUncheckedUpdateManyInput>
    /**
     * Filter which ReviewImages to update
     */
    where?: ReviewImageWhereInput
    /**
     * Limit how many ReviewImages to update.
     */
    limit?: number
  }

  /**
   * ReviewImage upsert
   */
  export type ReviewImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * The filter to search for the ReviewImage to update in case it exists.
     */
    where: ReviewImageWhereUniqueInput
    /**
     * In case the ReviewImage found by the `where` argument doesn't exist, create a new ReviewImage with this data.
     */
    create: XOR<ReviewImageCreateInput, ReviewImageUncheckedCreateInput>
    /**
     * In case the ReviewImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewImageUpdateInput, ReviewImageUncheckedUpdateInput>
  }

  /**
   * ReviewImage delete
   */
  export type ReviewImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
    /**
     * Filter which ReviewImage to delete.
     */
    where: ReviewImageWhereUniqueInput
  }

  /**
   * ReviewImage deleteMany
   */
  export type ReviewImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewImages to delete
     */
    where?: ReviewImageWhereInput
    /**
     * Limit how many ReviewImages to delete.
     */
    limit?: number
  }

  /**
   * ReviewImage without action
   */
  export type ReviewImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewImage
     */
    select?: ReviewImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewImage
     */
    omit?: ReviewImageOmit<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    id: number | null
    foodCategoryId: number | null
    regionId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type StoreSumAggregateOutputType = {
    id: bigint | null
    foodCategoryId: bigint | null
    regionId: bigint | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type StoreMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    foodCategoryId: bigint | null
    regionId: bigint | null
    address: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    businessStartHours: Date | null
    businessEndHours: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    foodCategoryId: bigint | null
    regionId: bigint | null
    address: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    businessStartHours: Date | null
    businessEndHours: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    name: number
    foodCategoryId: number
    regionId: number
    address: number
    latitude: number
    longitude: number
    businessStartHours: number
    businessEndHours: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    id?: true
    foodCategoryId?: true
    regionId?: true
    latitude?: true
    longitude?: true
  }

  export type StoreSumAggregateInputType = {
    id?: true
    foodCategoryId?: true
    regionId?: true
    latitude?: true
    longitude?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    name?: true
    foodCategoryId?: true
    regionId?: true
    address?: true
    latitude?: true
    longitude?: true
    businessStartHours?: true
    businessEndHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    name?: true
    foodCategoryId?: true
    regionId?: true
    address?: true
    latitude?: true
    longitude?: true
    businessStartHours?: true
    businessEndHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    name?: true
    foodCategoryId?: true
    regionId?: true
    address?: true
    latitude?: true
    longitude?: true
    businessStartHours?: true
    businessEndHours?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: bigint
    name: string
    foodCategoryId: bigint
    regionId: bigint
    address: string
    latitude: Decimal
    longitude: Decimal
    businessStartHours: Date | null
    businessEndHours: Date | null
    createdAt: Date
    updatedAt: Date | null
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    foodCategoryId?: boolean
    regionId?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    businessStartHours?: boolean
    businessEndHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["store"]>



  export type StoreSelectScalar = {
    id?: boolean
    name?: boolean
    foodCategoryId?: boolean
    regionId?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    businessStartHours?: boolean
    businessEndHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "foodCategoryId" | "regionId" | "address" | "latitude" | "longitude" | "businessStartHours" | "businessEndHours" | "createdAt" | "updatedAt", ExtArgs["result"]["store"]>

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      foodCategoryId: bigint
      regionId: bigint
      address: string
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      businessStartHours: Date | null
      businessEndHours: Date | null
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Store model
   */
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'BigInt'>
    readonly name: FieldRef<"Store", 'String'>
    readonly foodCategoryId: FieldRef<"Store", 'BigInt'>
    readonly regionId: FieldRef<"Store", 'BigInt'>
    readonly address: FieldRef<"Store", 'String'>
    readonly latitude: FieldRef<"Store", 'Decimal'>
    readonly longitude: FieldRef<"Store", 'Decimal'>
    readonly businessStartHours: FieldRef<"Store", 'DateTime'>
    readonly businessEndHours: FieldRef<"Store", 'DateTime'>
    readonly createdAt: FieldRef<"Store", 'DateTime'>
    readonly updatedAt: FieldRef<"Store", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to delete.
     */
    limit?: number
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
  }


  /**
   * Model StoreImage
   */

  export type AggregateStoreImage = {
    _count: StoreImageCountAggregateOutputType | null
    _avg: StoreImageAvgAggregateOutputType | null
    _sum: StoreImageSumAggregateOutputType | null
    _min: StoreImageMinAggregateOutputType | null
    _max: StoreImageMaxAggregateOutputType | null
  }

  export type StoreImageAvgAggregateOutputType = {
    id: number | null
    storeId: number | null
    imageOrder: number | null
  }

  export type StoreImageSumAggregateOutputType = {
    id: bigint | null
    storeId: bigint | null
    imageOrder: bigint | null
  }

  export type StoreImageMinAggregateOutputType = {
    id: bigint | null
    storeId: bigint | null
    imageUrl: string | null
    imageOrder: bigint | null
    createdAt: Date | null
  }

  export type StoreImageMaxAggregateOutputType = {
    id: bigint | null
    storeId: bigint | null
    imageUrl: string | null
    imageOrder: bigint | null
    createdAt: Date | null
  }

  export type StoreImageCountAggregateOutputType = {
    id: number
    storeId: number
    imageUrl: number
    imageOrder: number
    createdAt: number
    _all: number
  }


  export type StoreImageAvgAggregateInputType = {
    id?: true
    storeId?: true
    imageOrder?: true
  }

  export type StoreImageSumAggregateInputType = {
    id?: true
    storeId?: true
    imageOrder?: true
  }

  export type StoreImageMinAggregateInputType = {
    id?: true
    storeId?: true
    imageUrl?: true
    imageOrder?: true
    createdAt?: true
  }

  export type StoreImageMaxAggregateInputType = {
    id?: true
    storeId?: true
    imageUrl?: true
    imageOrder?: true
    createdAt?: true
  }

  export type StoreImageCountAggregateInputType = {
    id?: true
    storeId?: true
    imageUrl?: true
    imageOrder?: true
    createdAt?: true
    _all?: true
  }

  export type StoreImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreImage to aggregate.
     */
    where?: StoreImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreImages to fetch.
     */
    orderBy?: StoreImageOrderByWithRelationInput | StoreImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StoreImages
    **/
    _count?: true | StoreImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreImageMaxAggregateInputType
  }

  export type GetStoreImageAggregateType<T extends StoreImageAggregateArgs> = {
        [P in keyof T & keyof AggregateStoreImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStoreImage[P]>
      : GetScalarType<T[P], AggregateStoreImage[P]>
  }




  export type StoreImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreImageWhereInput
    orderBy?: StoreImageOrderByWithAggregationInput | StoreImageOrderByWithAggregationInput[]
    by: StoreImageScalarFieldEnum[] | StoreImageScalarFieldEnum
    having?: StoreImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreImageCountAggregateInputType | true
    _avg?: StoreImageAvgAggregateInputType
    _sum?: StoreImageSumAggregateInputType
    _min?: StoreImageMinAggregateInputType
    _max?: StoreImageMaxAggregateInputType
  }

  export type StoreImageGroupByOutputType = {
    id: bigint
    storeId: bigint
    imageUrl: string
    imageOrder: bigint
    createdAt: Date | null
    _count: StoreImageCountAggregateOutputType | null
    _avg: StoreImageAvgAggregateOutputType | null
    _sum: StoreImageSumAggregateOutputType | null
    _min: StoreImageMinAggregateOutputType | null
    _max: StoreImageMaxAggregateOutputType | null
  }

  type GetStoreImageGroupByPayload<T extends StoreImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreImageGroupByOutputType[P]>
            : GetScalarType<T[P], StoreImageGroupByOutputType[P]>
        }
      >
    >


  export type StoreImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    imageUrl?: boolean
    imageOrder?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["storeImage"]>



  export type StoreImageSelectScalar = {
    id?: boolean
    storeId?: boolean
    imageUrl?: boolean
    imageOrder?: boolean
    createdAt?: boolean
  }

  export type StoreImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "imageUrl" | "imageOrder" | "createdAt", ExtArgs["result"]["storeImage"]>

  export type $StoreImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StoreImage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      storeId: bigint
      imageUrl: string
      imageOrder: bigint
      createdAt: Date | null
    }, ExtArgs["result"]["storeImage"]>
    composites: {}
  }

  type StoreImageGetPayload<S extends boolean | null | undefined | StoreImageDefaultArgs> = $Result.GetResult<Prisma.$StoreImagePayload, S>

  type StoreImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreImageCountAggregateInputType | true
    }

  export interface StoreImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StoreImage'], meta: { name: 'StoreImage' } }
    /**
     * Find zero or one StoreImage that matches the filter.
     * @param {StoreImageFindUniqueArgs} args - Arguments to find a StoreImage
     * @example
     * // Get one StoreImage
     * const storeImage = await prisma.storeImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreImageFindUniqueArgs>(args: SelectSubset<T, StoreImageFindUniqueArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StoreImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreImageFindUniqueOrThrowArgs} args - Arguments to find a StoreImage
     * @example
     * // Get one StoreImage
     * const storeImage = await prisma.storeImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreImageFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageFindFirstArgs} args - Arguments to find a StoreImage
     * @example
     * // Get one StoreImage
     * const storeImage = await prisma.storeImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreImageFindFirstArgs>(args?: SelectSubset<T, StoreImageFindFirstArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StoreImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageFindFirstOrThrowArgs} args - Arguments to find a StoreImage
     * @example
     * // Get one StoreImage
     * const storeImage = await prisma.storeImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreImageFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StoreImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StoreImages
     * const storeImages = await prisma.storeImage.findMany()
     * 
     * // Get first 10 StoreImages
     * const storeImages = await prisma.storeImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeImageWithIdOnly = await prisma.storeImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreImageFindManyArgs>(args?: SelectSubset<T, StoreImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StoreImage.
     * @param {StoreImageCreateArgs} args - Arguments to create a StoreImage.
     * @example
     * // Create one StoreImage
     * const StoreImage = await prisma.storeImage.create({
     *   data: {
     *     // ... data to create a StoreImage
     *   }
     * })
     * 
     */
    create<T extends StoreImageCreateArgs>(args: SelectSubset<T, StoreImageCreateArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StoreImages.
     * @param {StoreImageCreateManyArgs} args - Arguments to create many StoreImages.
     * @example
     * // Create many StoreImages
     * const storeImage = await prisma.storeImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreImageCreateManyArgs>(args?: SelectSubset<T, StoreImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StoreImage.
     * @param {StoreImageDeleteArgs} args - Arguments to delete one StoreImage.
     * @example
     * // Delete one StoreImage
     * const StoreImage = await prisma.storeImage.delete({
     *   where: {
     *     // ... filter to delete one StoreImage
     *   }
     * })
     * 
     */
    delete<T extends StoreImageDeleteArgs>(args: SelectSubset<T, StoreImageDeleteArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StoreImage.
     * @param {StoreImageUpdateArgs} args - Arguments to update one StoreImage.
     * @example
     * // Update one StoreImage
     * const storeImage = await prisma.storeImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreImageUpdateArgs>(args: SelectSubset<T, StoreImageUpdateArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StoreImages.
     * @param {StoreImageDeleteManyArgs} args - Arguments to filter StoreImages to delete.
     * @example
     * // Delete a few StoreImages
     * const { count } = await prisma.storeImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreImageDeleteManyArgs>(args?: SelectSubset<T, StoreImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StoreImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StoreImages
     * const storeImage = await prisma.storeImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreImageUpdateManyArgs>(args: SelectSubset<T, StoreImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StoreImage.
     * @param {StoreImageUpsertArgs} args - Arguments to update or create a StoreImage.
     * @example
     * // Update or create a StoreImage
     * const storeImage = await prisma.storeImage.upsert({
     *   create: {
     *     // ... data to create a StoreImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StoreImage we want to update
     *   }
     * })
     */
    upsert<T extends StoreImageUpsertArgs>(args: SelectSubset<T, StoreImageUpsertArgs<ExtArgs>>): Prisma__StoreImageClient<$Result.GetResult<Prisma.$StoreImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StoreImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageCountArgs} args - Arguments to filter StoreImages to count.
     * @example
     * // Count the number of StoreImages
     * const count = await prisma.storeImage.count({
     *   where: {
     *     // ... the filter for the StoreImages we want to count
     *   }
     * })
    **/
    count<T extends StoreImageCountArgs>(
      args?: Subset<T, StoreImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StoreImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreImageAggregateArgs>(args: Subset<T, StoreImageAggregateArgs>): Prisma.PrismaPromise<GetStoreImageAggregateType<T>>

    /**
     * Group by StoreImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreImageGroupByArgs['orderBy'] }
        : { orderBy?: StoreImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StoreImage model
   */
  readonly fields: StoreImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StoreImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StoreImage model
   */
  interface StoreImageFieldRefs {
    readonly id: FieldRef<"StoreImage", 'BigInt'>
    readonly storeId: FieldRef<"StoreImage", 'BigInt'>
    readonly imageUrl: FieldRef<"StoreImage", 'String'>
    readonly imageOrder: FieldRef<"StoreImage", 'BigInt'>
    readonly createdAt: FieldRef<"StoreImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StoreImage findUnique
   */
  export type StoreImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Filter, which StoreImage to fetch.
     */
    where: StoreImageWhereUniqueInput
  }

  /**
   * StoreImage findUniqueOrThrow
   */
  export type StoreImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Filter, which StoreImage to fetch.
     */
    where: StoreImageWhereUniqueInput
  }

  /**
   * StoreImage findFirst
   */
  export type StoreImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Filter, which StoreImage to fetch.
     */
    where?: StoreImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreImages to fetch.
     */
    orderBy?: StoreImageOrderByWithRelationInput | StoreImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreImages.
     */
    cursor?: StoreImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreImages.
     */
    distinct?: StoreImageScalarFieldEnum | StoreImageScalarFieldEnum[]
  }

  /**
   * StoreImage findFirstOrThrow
   */
  export type StoreImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Filter, which StoreImage to fetch.
     */
    where?: StoreImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreImages to fetch.
     */
    orderBy?: StoreImageOrderByWithRelationInput | StoreImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StoreImages.
     */
    cursor?: StoreImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreImages.
     */
    distinct?: StoreImageScalarFieldEnum | StoreImageScalarFieldEnum[]
  }

  /**
   * StoreImage findMany
   */
  export type StoreImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Filter, which StoreImages to fetch.
     */
    where?: StoreImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StoreImages to fetch.
     */
    orderBy?: StoreImageOrderByWithRelationInput | StoreImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StoreImages.
     */
    cursor?: StoreImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StoreImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StoreImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StoreImages.
     */
    distinct?: StoreImageScalarFieldEnum | StoreImageScalarFieldEnum[]
  }

  /**
   * StoreImage create
   */
  export type StoreImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * The data needed to create a StoreImage.
     */
    data: XOR<StoreImageCreateInput, StoreImageUncheckedCreateInput>
  }

  /**
   * StoreImage createMany
   */
  export type StoreImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StoreImages.
     */
    data: StoreImageCreateManyInput | StoreImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StoreImage update
   */
  export type StoreImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * The data needed to update a StoreImage.
     */
    data: XOR<StoreImageUpdateInput, StoreImageUncheckedUpdateInput>
    /**
     * Choose, which StoreImage to update.
     */
    where: StoreImageWhereUniqueInput
  }

  /**
   * StoreImage updateMany
   */
  export type StoreImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StoreImages.
     */
    data: XOR<StoreImageUpdateManyMutationInput, StoreImageUncheckedUpdateManyInput>
    /**
     * Filter which StoreImages to update
     */
    where?: StoreImageWhereInput
    /**
     * Limit how many StoreImages to update.
     */
    limit?: number
  }

  /**
   * StoreImage upsert
   */
  export type StoreImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * The filter to search for the StoreImage to update in case it exists.
     */
    where: StoreImageWhereUniqueInput
    /**
     * In case the StoreImage found by the `where` argument doesn't exist, create a new StoreImage with this data.
     */
    create: XOR<StoreImageCreateInput, StoreImageUncheckedCreateInput>
    /**
     * In case the StoreImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreImageUpdateInput, StoreImageUncheckedUpdateInput>
  }

  /**
   * StoreImage delete
   */
  export type StoreImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
    /**
     * Filter which StoreImage to delete.
     */
    where: StoreImageWhereUniqueInput
  }

  /**
   * StoreImage deleteMany
   */
  export type StoreImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StoreImages to delete
     */
    where?: StoreImageWhereInput
    /**
     * Limit how many StoreImages to delete.
     */
    limit?: number
  }

  /**
   * StoreImage without action
   */
  export type StoreImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreImage
     */
    select?: StoreImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StoreImage
     */
    omit?: StoreImageOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    regionId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    point: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
    regionId: bigint | null
    latitude: Decimal | null
    longitude: Decimal | null
    point: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    gender: $Enums.UserGender | null
    birthDate: Date | null
    regionId: bigint | null
    address: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    createdAt: Date | null
    point: bigint | null
    email: string | null
    phone: string | null
    eventNotificationEnabled: boolean | null
    reviewReplyNotificationEnabled: boolean | null
    inquiryReplyNotificationEnabled: boolean | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    gender: $Enums.UserGender | null
    birthDate: Date | null
    regionId: bigint | null
    address: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    createdAt: Date | null
    point: bigint | null
    email: string | null
    phone: string | null
    eventNotificationEnabled: boolean | null
    reviewReplyNotificationEnabled: boolean | null
    inquiryReplyNotificationEnabled: boolean | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    gender: number
    birthDate: number
    regionId: number
    address: number
    latitude: number
    longitude: number
    createdAt: number
    point: number
    email: number
    phone: number
    eventNotificationEnabled: number
    reviewReplyNotificationEnabled: number
    inquiryReplyNotificationEnabled: number
    deletedAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    regionId?: true
    latitude?: true
    longitude?: true
    point?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    regionId?: true
    latitude?: true
    longitude?: true
    point?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    birthDate?: true
    regionId?: true
    address?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    point?: true
    email?: true
    phone?: true
    eventNotificationEnabled?: true
    reviewReplyNotificationEnabled?: true
    inquiryReplyNotificationEnabled?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    birthDate?: true
    regionId?: true
    address?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    point?: true
    email?: true
    phone?: true
    eventNotificationEnabled?: true
    reviewReplyNotificationEnabled?: true
    inquiryReplyNotificationEnabled?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    gender?: true
    birthDate?: true
    regionId?: true
    address?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    point?: true
    email?: true
    phone?: true
    eventNotificationEnabled?: true
    reviewReplyNotificationEnabled?: true
    inquiryReplyNotificationEnabled?: true
    deletedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    name: string
    gender: $Enums.UserGender
    birthDate: Date
    regionId: bigint
    address: string
    latitude: Decimal
    longitude: Decimal
    createdAt: Date
    point: bigint | null
    email: string
    phone: string | null
    eventNotificationEnabled: boolean | null
    reviewReplyNotificationEnabled: boolean | null
    inquiryReplyNotificationEnabled: boolean | null
    deletedAt: Date | null
    updatedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    gender?: boolean
    birthDate?: boolean
    regionId?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    point?: boolean
    email?: boolean
    phone?: boolean
    eventNotificationEnabled?: boolean
    reviewReplyNotificationEnabled?: boolean
    inquiryReplyNotificationEnabled?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    gender?: boolean
    birthDate?: boolean
    regionId?: boolean
    address?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    point?: boolean
    email?: boolean
    phone?: boolean
    eventNotificationEnabled?: boolean
    reviewReplyNotificationEnabled?: boolean
    inquiryReplyNotificationEnabled?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "gender" | "birthDate" | "regionId" | "address" | "latitude" | "longitude" | "createdAt" | "point" | "email" | "phone" | "eventNotificationEnabled" | "reviewReplyNotificationEnabled" | "inquiryReplyNotificationEnabled" | "deletedAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      gender: $Enums.UserGender
      birthDate: Date
      regionId: bigint
      address: string
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      createdAt: Date
      point: bigint | null
      email: string
      phone: string | null
      eventNotificationEnabled: boolean | null
      reviewReplyNotificationEnabled: boolean | null
      inquiryReplyNotificationEnabled: boolean | null
      deletedAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly name: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'UserGender'>
    readonly birthDate: FieldRef<"User", 'DateTime'>
    readonly regionId: FieldRef<"User", 'BigInt'>
    readonly address: FieldRef<"User", 'String'>
    readonly latitude: FieldRef<"User", 'Decimal'>
    readonly longitude: FieldRef<"User", 'Decimal'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly point: FieldRef<"User", 'BigInt'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly eventNotificationEnabled: FieldRef<"User", 'Boolean'>
    readonly reviewReplyNotificationEnabled: FieldRef<"User", 'Boolean'>
    readonly inquiryReplyNotificationEnabled: FieldRef<"User", 'Boolean'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model UserFoodCategory
   */

  export type AggregateUserFoodCategory = {
    _count: UserFoodCategoryCountAggregateOutputType | null
    _avg: UserFoodCategoryAvgAggregateOutputType | null
    _sum: UserFoodCategorySumAggregateOutputType | null
    _min: UserFoodCategoryMinAggregateOutputType | null
    _max: UserFoodCategoryMaxAggregateOutputType | null
  }

  export type UserFoodCategoryAvgAggregateOutputType = {
    foodCategoryId: number | null
    userId: number | null
  }

  export type UserFoodCategorySumAggregateOutputType = {
    foodCategoryId: bigint | null
    userId: bigint | null
  }

  export type UserFoodCategoryMinAggregateOutputType = {
    foodCategoryId: bigint | null
    userId: bigint | null
  }

  export type UserFoodCategoryMaxAggregateOutputType = {
    foodCategoryId: bigint | null
    userId: bigint | null
  }

  export type UserFoodCategoryCountAggregateOutputType = {
    foodCategoryId: number
    userId: number
    _all: number
  }


  export type UserFoodCategoryAvgAggregateInputType = {
    foodCategoryId?: true
    userId?: true
  }

  export type UserFoodCategorySumAggregateInputType = {
    foodCategoryId?: true
    userId?: true
  }

  export type UserFoodCategoryMinAggregateInputType = {
    foodCategoryId?: true
    userId?: true
  }

  export type UserFoodCategoryMaxAggregateInputType = {
    foodCategoryId?: true
    userId?: true
  }

  export type UserFoodCategoryCountAggregateInputType = {
    foodCategoryId?: true
    userId?: true
    _all?: true
  }

  export type UserFoodCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFoodCategory to aggregate.
     */
    where?: UserFoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFoodCategories to fetch.
     */
    orderBy?: UserFoodCategoryOrderByWithRelationInput | UserFoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFoodCategories
    **/
    _count?: true | UserFoodCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserFoodCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserFoodCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFoodCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFoodCategoryMaxAggregateInputType
  }

  export type GetUserFoodCategoryAggregateType<T extends UserFoodCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFoodCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFoodCategory[P]>
      : GetScalarType<T[P], AggregateUserFoodCategory[P]>
  }




  export type UserFoodCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFoodCategoryWhereInput
    orderBy?: UserFoodCategoryOrderByWithAggregationInput | UserFoodCategoryOrderByWithAggregationInput[]
    by: UserFoodCategoryScalarFieldEnum[] | UserFoodCategoryScalarFieldEnum
    having?: UserFoodCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFoodCategoryCountAggregateInputType | true
    _avg?: UserFoodCategoryAvgAggregateInputType
    _sum?: UserFoodCategorySumAggregateInputType
    _min?: UserFoodCategoryMinAggregateInputType
    _max?: UserFoodCategoryMaxAggregateInputType
  }

  export type UserFoodCategoryGroupByOutputType = {
    foodCategoryId: bigint
    userId: bigint
    _count: UserFoodCategoryCountAggregateOutputType | null
    _avg: UserFoodCategoryAvgAggregateOutputType | null
    _sum: UserFoodCategorySumAggregateOutputType | null
    _min: UserFoodCategoryMinAggregateOutputType | null
    _max: UserFoodCategoryMaxAggregateOutputType | null
  }

  type GetUserFoodCategoryGroupByPayload<T extends UserFoodCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFoodCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFoodCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFoodCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserFoodCategoryGroupByOutputType[P]>
        }
      >
    >


  export type UserFoodCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    foodCategoryId?: boolean
    userId?: boolean
  }, ExtArgs["result"]["userFoodCategory"]>



  export type UserFoodCategorySelectScalar = {
    foodCategoryId?: boolean
    userId?: boolean
  }

  export type UserFoodCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"foodCategoryId" | "userId", ExtArgs["result"]["userFoodCategory"]>

  export type $UserFoodCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFoodCategory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      foodCategoryId: bigint
      userId: bigint
    }, ExtArgs["result"]["userFoodCategory"]>
    composites: {}
  }

  type UserFoodCategoryGetPayload<S extends boolean | null | undefined | UserFoodCategoryDefaultArgs> = $Result.GetResult<Prisma.$UserFoodCategoryPayload, S>

  type UserFoodCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFoodCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFoodCategoryCountAggregateInputType | true
    }

  export interface UserFoodCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFoodCategory'], meta: { name: 'UserFoodCategory' } }
    /**
     * Find zero or one UserFoodCategory that matches the filter.
     * @param {UserFoodCategoryFindUniqueArgs} args - Arguments to find a UserFoodCategory
     * @example
     * // Get one UserFoodCategory
     * const userFoodCategory = await prisma.userFoodCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFoodCategoryFindUniqueArgs>(args: SelectSubset<T, UserFoodCategoryFindUniqueArgs<ExtArgs>>): Prisma__UserFoodCategoryClient<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFoodCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFoodCategoryFindUniqueOrThrowArgs} args - Arguments to find a UserFoodCategory
     * @example
     * // Get one UserFoodCategory
     * const userFoodCategory = await prisma.userFoodCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFoodCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFoodCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFoodCategoryClient<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFoodCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodCategoryFindFirstArgs} args - Arguments to find a UserFoodCategory
     * @example
     * // Get one UserFoodCategory
     * const userFoodCategory = await prisma.userFoodCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFoodCategoryFindFirstArgs>(args?: SelectSubset<T, UserFoodCategoryFindFirstArgs<ExtArgs>>): Prisma__UserFoodCategoryClient<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFoodCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodCategoryFindFirstOrThrowArgs} args - Arguments to find a UserFoodCategory
     * @example
     * // Get one UserFoodCategory
     * const userFoodCategory = await prisma.userFoodCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFoodCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFoodCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFoodCategoryClient<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFoodCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFoodCategories
     * const userFoodCategories = await prisma.userFoodCategory.findMany()
     * 
     * // Get first 10 UserFoodCategories
     * const userFoodCategories = await prisma.userFoodCategory.findMany({ take: 10 })
     * 
     * // Only select the `foodCategoryId`
     * const userFoodCategoryWithFoodCategoryIdOnly = await prisma.userFoodCategory.findMany({ select: { foodCategoryId: true } })
     * 
     */
    findMany<T extends UserFoodCategoryFindManyArgs>(args?: SelectSubset<T, UserFoodCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFoodCategory.
     * @param {UserFoodCategoryCreateArgs} args - Arguments to create a UserFoodCategory.
     * @example
     * // Create one UserFoodCategory
     * const UserFoodCategory = await prisma.userFoodCategory.create({
     *   data: {
     *     // ... data to create a UserFoodCategory
     *   }
     * })
     * 
     */
    create<T extends UserFoodCategoryCreateArgs>(args: SelectSubset<T, UserFoodCategoryCreateArgs<ExtArgs>>): Prisma__UserFoodCategoryClient<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFoodCategories.
     * @param {UserFoodCategoryCreateManyArgs} args - Arguments to create many UserFoodCategories.
     * @example
     * // Create many UserFoodCategories
     * const userFoodCategory = await prisma.userFoodCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFoodCategoryCreateManyArgs>(args?: SelectSubset<T, UserFoodCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserFoodCategory.
     * @param {UserFoodCategoryDeleteArgs} args - Arguments to delete one UserFoodCategory.
     * @example
     * // Delete one UserFoodCategory
     * const UserFoodCategory = await prisma.userFoodCategory.delete({
     *   where: {
     *     // ... filter to delete one UserFoodCategory
     *   }
     * })
     * 
     */
    delete<T extends UserFoodCategoryDeleteArgs>(args: SelectSubset<T, UserFoodCategoryDeleteArgs<ExtArgs>>): Prisma__UserFoodCategoryClient<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFoodCategory.
     * @param {UserFoodCategoryUpdateArgs} args - Arguments to update one UserFoodCategory.
     * @example
     * // Update one UserFoodCategory
     * const userFoodCategory = await prisma.userFoodCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFoodCategoryUpdateArgs>(args: SelectSubset<T, UserFoodCategoryUpdateArgs<ExtArgs>>): Prisma__UserFoodCategoryClient<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFoodCategories.
     * @param {UserFoodCategoryDeleteManyArgs} args - Arguments to filter UserFoodCategories to delete.
     * @example
     * // Delete a few UserFoodCategories
     * const { count } = await prisma.userFoodCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFoodCategoryDeleteManyArgs>(args?: SelectSubset<T, UserFoodCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFoodCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFoodCategories
     * const userFoodCategory = await prisma.userFoodCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFoodCategoryUpdateManyArgs>(args: SelectSubset<T, UserFoodCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserFoodCategory.
     * @param {UserFoodCategoryUpsertArgs} args - Arguments to update or create a UserFoodCategory.
     * @example
     * // Update or create a UserFoodCategory
     * const userFoodCategory = await prisma.userFoodCategory.upsert({
     *   create: {
     *     // ... data to create a UserFoodCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFoodCategory we want to update
     *   }
     * })
     */
    upsert<T extends UserFoodCategoryUpsertArgs>(args: SelectSubset<T, UserFoodCategoryUpsertArgs<ExtArgs>>): Prisma__UserFoodCategoryClient<$Result.GetResult<Prisma.$UserFoodCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFoodCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodCategoryCountArgs} args - Arguments to filter UserFoodCategories to count.
     * @example
     * // Count the number of UserFoodCategories
     * const count = await prisma.userFoodCategory.count({
     *   where: {
     *     // ... the filter for the UserFoodCategories we want to count
     *   }
     * })
    **/
    count<T extends UserFoodCategoryCountArgs>(
      args?: Subset<T, UserFoodCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFoodCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFoodCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFoodCategoryAggregateArgs>(args: Subset<T, UserFoodCategoryAggregateArgs>): Prisma.PrismaPromise<GetUserFoodCategoryAggregateType<T>>

    /**
     * Group by UserFoodCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFoodCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFoodCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFoodCategoryGroupByArgs['orderBy'] }
        : { orderBy?: UserFoodCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFoodCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFoodCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFoodCategory model
   */
  readonly fields: UserFoodCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFoodCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFoodCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserFoodCategory model
   */
  interface UserFoodCategoryFieldRefs {
    readonly foodCategoryId: FieldRef<"UserFoodCategory", 'BigInt'>
    readonly userId: FieldRef<"UserFoodCategory", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * UserFoodCategory findUnique
   */
  export type UserFoodCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Filter, which UserFoodCategory to fetch.
     */
    where: UserFoodCategoryWhereUniqueInput
  }

  /**
   * UserFoodCategory findUniqueOrThrow
   */
  export type UserFoodCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Filter, which UserFoodCategory to fetch.
     */
    where: UserFoodCategoryWhereUniqueInput
  }

  /**
   * UserFoodCategory findFirst
   */
  export type UserFoodCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Filter, which UserFoodCategory to fetch.
     */
    where?: UserFoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFoodCategories to fetch.
     */
    orderBy?: UserFoodCategoryOrderByWithRelationInput | UserFoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFoodCategories.
     */
    cursor?: UserFoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFoodCategories.
     */
    distinct?: UserFoodCategoryScalarFieldEnum | UserFoodCategoryScalarFieldEnum[]
  }

  /**
   * UserFoodCategory findFirstOrThrow
   */
  export type UserFoodCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Filter, which UserFoodCategory to fetch.
     */
    where?: UserFoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFoodCategories to fetch.
     */
    orderBy?: UserFoodCategoryOrderByWithRelationInput | UserFoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFoodCategories.
     */
    cursor?: UserFoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFoodCategories.
     */
    distinct?: UserFoodCategoryScalarFieldEnum | UserFoodCategoryScalarFieldEnum[]
  }

  /**
   * UserFoodCategory findMany
   */
  export type UserFoodCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Filter, which UserFoodCategories to fetch.
     */
    where?: UserFoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFoodCategories to fetch.
     */
    orderBy?: UserFoodCategoryOrderByWithRelationInput | UserFoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFoodCategories.
     */
    cursor?: UserFoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFoodCategories.
     */
    distinct?: UserFoodCategoryScalarFieldEnum | UserFoodCategoryScalarFieldEnum[]
  }

  /**
   * UserFoodCategory create
   */
  export type UserFoodCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a UserFoodCategory.
     */
    data: XOR<UserFoodCategoryCreateInput, UserFoodCategoryUncheckedCreateInput>
  }

  /**
   * UserFoodCategory createMany
   */
  export type UserFoodCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFoodCategories.
     */
    data: UserFoodCategoryCreateManyInput | UserFoodCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFoodCategory update
   */
  export type UserFoodCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a UserFoodCategory.
     */
    data: XOR<UserFoodCategoryUpdateInput, UserFoodCategoryUncheckedUpdateInput>
    /**
     * Choose, which UserFoodCategory to update.
     */
    where: UserFoodCategoryWhereUniqueInput
  }

  /**
   * UserFoodCategory updateMany
   */
  export type UserFoodCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFoodCategories.
     */
    data: XOR<UserFoodCategoryUpdateManyMutationInput, UserFoodCategoryUncheckedUpdateManyInput>
    /**
     * Filter which UserFoodCategories to update
     */
    where?: UserFoodCategoryWhereInput
    /**
     * Limit how many UserFoodCategories to update.
     */
    limit?: number
  }

  /**
   * UserFoodCategory upsert
   */
  export type UserFoodCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the UserFoodCategory to update in case it exists.
     */
    where: UserFoodCategoryWhereUniqueInput
    /**
     * In case the UserFoodCategory found by the `where` argument doesn't exist, create a new UserFoodCategory with this data.
     */
    create: XOR<UserFoodCategoryCreateInput, UserFoodCategoryUncheckedCreateInput>
    /**
     * In case the UserFoodCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFoodCategoryUpdateInput, UserFoodCategoryUncheckedUpdateInput>
  }

  /**
   * UserFoodCategory delete
   */
  export type UserFoodCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
    /**
     * Filter which UserFoodCategory to delete.
     */
    where: UserFoodCategoryWhereUniqueInput
  }

  /**
   * UserFoodCategory deleteMany
   */
  export type UserFoodCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFoodCategories to delete
     */
    where?: UserFoodCategoryWhereInput
    /**
     * Limit how many UserFoodCategories to delete.
     */
    limit?: number
  }

  /**
   * UserFoodCategory without action
   */
  export type UserFoodCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFoodCategory
     */
    select?: UserFoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFoodCategory
     */
    omit?: UserFoodCategoryOmit<ExtArgs> | null
  }


  /**
   * Model UserMission
   */

  export type AggregateUserMission = {
    _count: UserMissionCountAggregateOutputType | null
    _avg: UserMissionAvgAggregateOutputType | null
    _sum: UserMissionSumAggregateOutputType | null
    _min: UserMissionMinAggregateOutputType | null
    _max: UserMissionMaxAggregateOutputType | null
  }

  export type UserMissionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    missionId: number | null
  }

  export type UserMissionSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    missionId: bigint | null
  }

  export type UserMissionMinAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    missionId: bigint | null
    status: $Enums.UserMissionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMissionMaxAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
    missionId: bigint | null
    status: $Enums.UserMissionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMissionCountAggregateOutputType = {
    id: number
    userId: number
    missionId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMissionAvgAggregateInputType = {
    id?: true
    userId?: true
    missionId?: true
  }

  export type UserMissionSumAggregateInputType = {
    id?: true
    userId?: true
    missionId?: true
  }

  export type UserMissionMinAggregateInputType = {
    id?: true
    userId?: true
    missionId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMissionMaxAggregateInputType = {
    id?: true
    userId?: true
    missionId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMissionCountAggregateInputType = {
    id?: true
    userId?: true
    missionId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserMissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMission to aggregate.
     */
    where?: UserMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMissions to fetch.
     */
    orderBy?: UserMissionOrderByWithRelationInput | UserMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMissions
    **/
    _count?: true | UserMissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserMissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserMissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMissionMaxAggregateInputType
  }

  export type GetUserMissionAggregateType<T extends UserMissionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMission[P]>
      : GetScalarType<T[P], AggregateUserMission[P]>
  }




  export type UserMissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMissionWhereInput
    orderBy?: UserMissionOrderByWithAggregationInput | UserMissionOrderByWithAggregationInput[]
    by: UserMissionScalarFieldEnum[] | UserMissionScalarFieldEnum
    having?: UserMissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMissionCountAggregateInputType | true
    _avg?: UserMissionAvgAggregateInputType
    _sum?: UserMissionSumAggregateInputType
    _min?: UserMissionMinAggregateInputType
    _max?: UserMissionMaxAggregateInputType
  }

  export type UserMissionGroupByOutputType = {
    id: bigint
    userId: bigint
    missionId: bigint
    status: $Enums.UserMissionStatus
    createdAt: Date
    updatedAt: Date | null
    _count: UserMissionCountAggregateOutputType | null
    _avg: UserMissionAvgAggregateOutputType | null
    _sum: UserMissionSumAggregateOutputType | null
    _min: UserMissionMinAggregateOutputType | null
    _max: UserMissionMaxAggregateOutputType | null
  }

  type GetUserMissionGroupByPayload<T extends UserMissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMissionGroupByOutputType[P]>
            : GetScalarType<T[P], UserMissionGroupByOutputType[P]>
        }
      >
    >


  export type UserMissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    missionId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userMission"]>



  export type UserMissionSelectScalar = {
    id?: boolean
    userId?: boolean
    missionId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserMissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "missionId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["userMission"]>

  export type $UserMissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userId: bigint
      missionId: bigint
      status: $Enums.UserMissionStatus
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["userMission"]>
    composites: {}
  }

  type UserMissionGetPayload<S extends boolean | null | undefined | UserMissionDefaultArgs> = $Result.GetResult<Prisma.$UserMissionPayload, S>

  type UserMissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserMissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserMissionCountAggregateInputType | true
    }

  export interface UserMissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMission'], meta: { name: 'UserMission' } }
    /**
     * Find zero or one UserMission that matches the filter.
     * @param {UserMissionFindUniqueArgs} args - Arguments to find a UserMission
     * @example
     * // Get one UserMission
     * const userMission = await prisma.userMission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserMissionFindUniqueArgs>(args: SelectSubset<T, UserMissionFindUniqueArgs<ExtArgs>>): Prisma__UserMissionClient<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserMission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserMissionFindUniqueOrThrowArgs} args - Arguments to find a UserMission
     * @example
     * // Get one UserMission
     * const userMission = await prisma.userMission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserMissionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserMissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserMissionClient<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionFindFirstArgs} args - Arguments to find a UserMission
     * @example
     * // Get one UserMission
     * const userMission = await prisma.userMission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserMissionFindFirstArgs>(args?: SelectSubset<T, UserMissionFindFirstArgs<ExtArgs>>): Prisma__UserMissionClient<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionFindFirstOrThrowArgs} args - Arguments to find a UserMission
     * @example
     * // Get one UserMission
     * const userMission = await prisma.userMission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserMissionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserMissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserMissionClient<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserMissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMissions
     * const userMissions = await prisma.userMission.findMany()
     * 
     * // Get first 10 UserMissions
     * const userMissions = await prisma.userMission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMissionWithIdOnly = await prisma.userMission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserMissionFindManyArgs>(args?: SelectSubset<T, UserMissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserMission.
     * @param {UserMissionCreateArgs} args - Arguments to create a UserMission.
     * @example
     * // Create one UserMission
     * const UserMission = await prisma.userMission.create({
     *   data: {
     *     // ... data to create a UserMission
     *   }
     * })
     * 
     */
    create<T extends UserMissionCreateArgs>(args: SelectSubset<T, UserMissionCreateArgs<ExtArgs>>): Prisma__UserMissionClient<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserMissions.
     * @param {UserMissionCreateManyArgs} args - Arguments to create many UserMissions.
     * @example
     * // Create many UserMissions
     * const userMission = await prisma.userMission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserMissionCreateManyArgs>(args?: SelectSubset<T, UserMissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserMission.
     * @param {UserMissionDeleteArgs} args - Arguments to delete one UserMission.
     * @example
     * // Delete one UserMission
     * const UserMission = await prisma.userMission.delete({
     *   where: {
     *     // ... filter to delete one UserMission
     *   }
     * })
     * 
     */
    delete<T extends UserMissionDeleteArgs>(args: SelectSubset<T, UserMissionDeleteArgs<ExtArgs>>): Prisma__UserMissionClient<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserMission.
     * @param {UserMissionUpdateArgs} args - Arguments to update one UserMission.
     * @example
     * // Update one UserMission
     * const userMission = await prisma.userMission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserMissionUpdateArgs>(args: SelectSubset<T, UserMissionUpdateArgs<ExtArgs>>): Prisma__UserMissionClient<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserMissions.
     * @param {UserMissionDeleteManyArgs} args - Arguments to filter UserMissions to delete.
     * @example
     * // Delete a few UserMissions
     * const { count } = await prisma.userMission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserMissionDeleteManyArgs>(args?: SelectSubset<T, UserMissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMissions
     * const userMission = await prisma.userMission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserMissionUpdateManyArgs>(args: SelectSubset<T, UserMissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserMission.
     * @param {UserMissionUpsertArgs} args - Arguments to update or create a UserMission.
     * @example
     * // Update or create a UserMission
     * const userMission = await prisma.userMission.upsert({
     *   create: {
     *     // ... data to create a UserMission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMission we want to update
     *   }
     * })
     */
    upsert<T extends UserMissionUpsertArgs>(args: SelectSubset<T, UserMissionUpsertArgs<ExtArgs>>): Prisma__UserMissionClient<$Result.GetResult<Prisma.$UserMissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionCountArgs} args - Arguments to filter UserMissions to count.
     * @example
     * // Count the number of UserMissions
     * const count = await prisma.userMission.count({
     *   where: {
     *     // ... the filter for the UserMissions we want to count
     *   }
     * })
    **/
    count<T extends UserMissionCountArgs>(
      args?: Subset<T, UserMissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserMissionAggregateArgs>(args: Subset<T, UserMissionAggregateArgs>): Prisma.PrismaPromise<GetUserMissionAggregateType<T>>

    /**
     * Group by UserMission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserMissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMissionGroupByArgs['orderBy'] }
        : { orderBy?: UserMissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserMissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMission model
   */
  readonly fields: UserMissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserMission model
   */
  interface UserMissionFieldRefs {
    readonly id: FieldRef<"UserMission", 'BigInt'>
    readonly userId: FieldRef<"UserMission", 'BigInt'>
    readonly missionId: FieldRef<"UserMission", 'BigInt'>
    readonly status: FieldRef<"UserMission", 'UserMissionStatus'>
    readonly createdAt: FieldRef<"UserMission", 'DateTime'>
    readonly updatedAt: FieldRef<"UserMission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserMission findUnique
   */
  export type UserMissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Filter, which UserMission to fetch.
     */
    where: UserMissionWhereUniqueInput
  }

  /**
   * UserMission findUniqueOrThrow
   */
  export type UserMissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Filter, which UserMission to fetch.
     */
    where: UserMissionWhereUniqueInput
  }

  /**
   * UserMission findFirst
   */
  export type UserMissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Filter, which UserMission to fetch.
     */
    where?: UserMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMissions to fetch.
     */
    orderBy?: UserMissionOrderByWithRelationInput | UserMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMissions.
     */
    cursor?: UserMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMissions.
     */
    distinct?: UserMissionScalarFieldEnum | UserMissionScalarFieldEnum[]
  }

  /**
   * UserMission findFirstOrThrow
   */
  export type UserMissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Filter, which UserMission to fetch.
     */
    where?: UserMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMissions to fetch.
     */
    orderBy?: UserMissionOrderByWithRelationInput | UserMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMissions.
     */
    cursor?: UserMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMissions.
     */
    distinct?: UserMissionScalarFieldEnum | UserMissionScalarFieldEnum[]
  }

  /**
   * UserMission findMany
   */
  export type UserMissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Filter, which UserMissions to fetch.
     */
    where?: UserMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMissions to fetch.
     */
    orderBy?: UserMissionOrderByWithRelationInput | UserMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMissions.
     */
    cursor?: UserMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMissions.
     */
    distinct?: UserMissionScalarFieldEnum | UserMissionScalarFieldEnum[]
  }

  /**
   * UserMission create
   */
  export type UserMissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * The data needed to create a UserMission.
     */
    data: XOR<UserMissionCreateInput, UserMissionUncheckedCreateInput>
  }

  /**
   * UserMission createMany
   */
  export type UserMissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMissions.
     */
    data: UserMissionCreateManyInput | UserMissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserMission update
   */
  export type UserMissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * The data needed to update a UserMission.
     */
    data: XOR<UserMissionUpdateInput, UserMissionUncheckedUpdateInput>
    /**
     * Choose, which UserMission to update.
     */
    where: UserMissionWhereUniqueInput
  }

  /**
   * UserMission updateMany
   */
  export type UserMissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMissions.
     */
    data: XOR<UserMissionUpdateManyMutationInput, UserMissionUncheckedUpdateManyInput>
    /**
     * Filter which UserMissions to update
     */
    where?: UserMissionWhereInput
    /**
     * Limit how many UserMissions to update.
     */
    limit?: number
  }

  /**
   * UserMission upsert
   */
  export type UserMissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * The filter to search for the UserMission to update in case it exists.
     */
    where: UserMissionWhereUniqueInput
    /**
     * In case the UserMission found by the `where` argument doesn't exist, create a new UserMission with this data.
     */
    create: XOR<UserMissionCreateInput, UserMissionUncheckedCreateInput>
    /**
     * In case the UserMission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMissionUpdateInput, UserMissionUncheckedUpdateInput>
  }

  /**
   * UserMission delete
   */
  export type UserMissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
    /**
     * Filter which UserMission to delete.
     */
    where: UserMissionWhereUniqueInput
  }

  /**
   * UserMission deleteMany
   */
  export type UserMissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMissions to delete
     */
    where?: UserMissionWhereInput
    /**
     * Limit how many UserMissions to delete.
     */
    limit?: number
  }

  /**
   * UserMission without action
   */
  export type UserMissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMission
     */
    select?: UserMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMission
     */
    omit?: UserMissionOmit<ExtArgs> | null
  }


  /**
   * Model UserRegionMissionCount
   */

  export type AggregateUserRegionMissionCount = {
    _count: UserRegionMissionCountCountAggregateOutputType | null
    _avg: UserRegionMissionCountAvgAggregateOutputType | null
    _sum: UserRegionMissionCountSumAggregateOutputType | null
    _min: UserRegionMissionCountMinAggregateOutputType | null
    _max: UserRegionMissionCountMaxAggregateOutputType | null
  }

  export type UserRegionMissionCountAvgAggregateOutputType = {
    userId: number | null
    regionId: number | null
    missionCount: number | null
  }

  export type UserRegionMissionCountSumAggregateOutputType = {
    userId: bigint | null
    regionId: bigint | null
    missionCount: bigint | null
  }

  export type UserRegionMissionCountMinAggregateOutputType = {
    userId: bigint | null
    regionId: bigint | null
    missionCount: bigint | null
  }

  export type UserRegionMissionCountMaxAggregateOutputType = {
    userId: bigint | null
    regionId: bigint | null
    missionCount: bigint | null
  }

  export type UserRegionMissionCountCountAggregateOutputType = {
    userId: number
    regionId: number
    missionCount: number
    _all: number
  }


  export type UserRegionMissionCountAvgAggregateInputType = {
    userId?: true
    regionId?: true
    missionCount?: true
  }

  export type UserRegionMissionCountSumAggregateInputType = {
    userId?: true
    regionId?: true
    missionCount?: true
  }

  export type UserRegionMissionCountMinAggregateInputType = {
    userId?: true
    regionId?: true
    missionCount?: true
  }

  export type UserRegionMissionCountMaxAggregateInputType = {
    userId?: true
    regionId?: true
    missionCount?: true
  }

  export type UserRegionMissionCountCountAggregateInputType = {
    userId?: true
    regionId?: true
    missionCount?: true
    _all?: true
  }

  export type UserRegionMissionCountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRegionMissionCount to aggregate.
     */
    where?: UserRegionMissionCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRegionMissionCounts to fetch.
     */
    orderBy?: UserRegionMissionCountOrderByWithRelationInput | UserRegionMissionCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRegionMissionCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRegionMissionCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRegionMissionCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRegionMissionCounts
    **/
    _count?: true | UserRegionMissionCountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRegionMissionCountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRegionMissionCountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRegionMissionCountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRegionMissionCountMaxAggregateInputType
  }

  export type GetUserRegionMissionCountAggregateType<T extends UserRegionMissionCountAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRegionMissionCount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRegionMissionCount[P]>
      : GetScalarType<T[P], AggregateUserRegionMissionCount[P]>
  }




  export type UserRegionMissionCountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRegionMissionCountWhereInput
    orderBy?: UserRegionMissionCountOrderByWithAggregationInput | UserRegionMissionCountOrderByWithAggregationInput[]
    by: UserRegionMissionCountScalarFieldEnum[] | UserRegionMissionCountScalarFieldEnum
    having?: UserRegionMissionCountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRegionMissionCountCountAggregateInputType | true
    _avg?: UserRegionMissionCountAvgAggregateInputType
    _sum?: UserRegionMissionCountSumAggregateInputType
    _min?: UserRegionMissionCountMinAggregateInputType
    _max?: UserRegionMissionCountMaxAggregateInputType
  }

  export type UserRegionMissionCountGroupByOutputType = {
    userId: bigint
    regionId: bigint
    missionCount: bigint | null
    _count: UserRegionMissionCountCountAggregateOutputType | null
    _avg: UserRegionMissionCountAvgAggregateOutputType | null
    _sum: UserRegionMissionCountSumAggregateOutputType | null
    _min: UserRegionMissionCountMinAggregateOutputType | null
    _max: UserRegionMissionCountMaxAggregateOutputType | null
  }

  type GetUserRegionMissionCountGroupByPayload<T extends UserRegionMissionCountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRegionMissionCountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRegionMissionCountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRegionMissionCountGroupByOutputType[P]>
            : GetScalarType<T[P], UserRegionMissionCountGroupByOutputType[P]>
        }
      >
    >


  export type UserRegionMissionCountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    regionId?: boolean
    missionCount?: boolean
  }, ExtArgs["result"]["userRegionMissionCount"]>



  export type UserRegionMissionCountSelectScalar = {
    userId?: boolean
    regionId?: boolean
    missionCount?: boolean
  }

  export type UserRegionMissionCountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "regionId" | "missionCount", ExtArgs["result"]["userRegionMissionCount"]>

  export type $UserRegionMissionCountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRegionMissionCount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: bigint
      regionId: bigint
      missionCount: bigint | null
    }, ExtArgs["result"]["userRegionMissionCount"]>
    composites: {}
  }

  type UserRegionMissionCountGetPayload<S extends boolean | null | undefined | UserRegionMissionCountDefaultArgs> = $Result.GetResult<Prisma.$UserRegionMissionCountPayload, S>

  type UserRegionMissionCountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRegionMissionCountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRegionMissionCountCountAggregateInputType | true
    }

  export interface UserRegionMissionCountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRegionMissionCount'], meta: { name: 'UserRegionMissionCount' } }
    /**
     * Find zero or one UserRegionMissionCount that matches the filter.
     * @param {UserRegionMissionCountFindUniqueArgs} args - Arguments to find a UserRegionMissionCount
     * @example
     * // Get one UserRegionMissionCount
     * const userRegionMissionCount = await prisma.userRegionMissionCount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRegionMissionCountFindUniqueArgs>(args: SelectSubset<T, UserRegionMissionCountFindUniqueArgs<ExtArgs>>): Prisma__UserRegionMissionCountClient<$Result.GetResult<Prisma.$UserRegionMissionCountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRegionMissionCount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRegionMissionCountFindUniqueOrThrowArgs} args - Arguments to find a UserRegionMissionCount
     * @example
     * // Get one UserRegionMissionCount
     * const userRegionMissionCount = await prisma.userRegionMissionCount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRegionMissionCountFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRegionMissionCountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRegionMissionCountClient<$Result.GetResult<Prisma.$UserRegionMissionCountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRegionMissionCount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegionMissionCountFindFirstArgs} args - Arguments to find a UserRegionMissionCount
     * @example
     * // Get one UserRegionMissionCount
     * const userRegionMissionCount = await prisma.userRegionMissionCount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRegionMissionCountFindFirstArgs>(args?: SelectSubset<T, UserRegionMissionCountFindFirstArgs<ExtArgs>>): Prisma__UserRegionMissionCountClient<$Result.GetResult<Prisma.$UserRegionMissionCountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRegionMissionCount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegionMissionCountFindFirstOrThrowArgs} args - Arguments to find a UserRegionMissionCount
     * @example
     * // Get one UserRegionMissionCount
     * const userRegionMissionCount = await prisma.userRegionMissionCount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRegionMissionCountFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRegionMissionCountFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRegionMissionCountClient<$Result.GetResult<Prisma.$UserRegionMissionCountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRegionMissionCounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegionMissionCountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRegionMissionCounts
     * const userRegionMissionCounts = await prisma.userRegionMissionCount.findMany()
     * 
     * // Get first 10 UserRegionMissionCounts
     * const userRegionMissionCounts = await prisma.userRegionMissionCount.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userRegionMissionCountWithUserIdOnly = await prisma.userRegionMissionCount.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserRegionMissionCountFindManyArgs>(args?: SelectSubset<T, UserRegionMissionCountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRegionMissionCountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRegionMissionCount.
     * @param {UserRegionMissionCountCreateArgs} args - Arguments to create a UserRegionMissionCount.
     * @example
     * // Create one UserRegionMissionCount
     * const UserRegionMissionCount = await prisma.userRegionMissionCount.create({
     *   data: {
     *     // ... data to create a UserRegionMissionCount
     *   }
     * })
     * 
     */
    create<T extends UserRegionMissionCountCreateArgs>(args: SelectSubset<T, UserRegionMissionCountCreateArgs<ExtArgs>>): Prisma__UserRegionMissionCountClient<$Result.GetResult<Prisma.$UserRegionMissionCountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRegionMissionCounts.
     * @param {UserRegionMissionCountCreateManyArgs} args - Arguments to create many UserRegionMissionCounts.
     * @example
     * // Create many UserRegionMissionCounts
     * const userRegionMissionCount = await prisma.userRegionMissionCount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRegionMissionCountCreateManyArgs>(args?: SelectSubset<T, UserRegionMissionCountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRegionMissionCount.
     * @param {UserRegionMissionCountDeleteArgs} args - Arguments to delete one UserRegionMissionCount.
     * @example
     * // Delete one UserRegionMissionCount
     * const UserRegionMissionCount = await prisma.userRegionMissionCount.delete({
     *   where: {
     *     // ... filter to delete one UserRegionMissionCount
     *   }
     * })
     * 
     */
    delete<T extends UserRegionMissionCountDeleteArgs>(args: SelectSubset<T, UserRegionMissionCountDeleteArgs<ExtArgs>>): Prisma__UserRegionMissionCountClient<$Result.GetResult<Prisma.$UserRegionMissionCountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRegionMissionCount.
     * @param {UserRegionMissionCountUpdateArgs} args - Arguments to update one UserRegionMissionCount.
     * @example
     * // Update one UserRegionMissionCount
     * const userRegionMissionCount = await prisma.userRegionMissionCount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRegionMissionCountUpdateArgs>(args: SelectSubset<T, UserRegionMissionCountUpdateArgs<ExtArgs>>): Prisma__UserRegionMissionCountClient<$Result.GetResult<Prisma.$UserRegionMissionCountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRegionMissionCounts.
     * @param {UserRegionMissionCountDeleteManyArgs} args - Arguments to filter UserRegionMissionCounts to delete.
     * @example
     * // Delete a few UserRegionMissionCounts
     * const { count } = await prisma.userRegionMissionCount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRegionMissionCountDeleteManyArgs>(args?: SelectSubset<T, UserRegionMissionCountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRegionMissionCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegionMissionCountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRegionMissionCounts
     * const userRegionMissionCount = await prisma.userRegionMissionCount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRegionMissionCountUpdateManyArgs>(args: SelectSubset<T, UserRegionMissionCountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRegionMissionCount.
     * @param {UserRegionMissionCountUpsertArgs} args - Arguments to update or create a UserRegionMissionCount.
     * @example
     * // Update or create a UserRegionMissionCount
     * const userRegionMissionCount = await prisma.userRegionMissionCount.upsert({
     *   create: {
     *     // ... data to create a UserRegionMissionCount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRegionMissionCount we want to update
     *   }
     * })
     */
    upsert<T extends UserRegionMissionCountUpsertArgs>(args: SelectSubset<T, UserRegionMissionCountUpsertArgs<ExtArgs>>): Prisma__UserRegionMissionCountClient<$Result.GetResult<Prisma.$UserRegionMissionCountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRegionMissionCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegionMissionCountCountArgs} args - Arguments to filter UserRegionMissionCounts to count.
     * @example
     * // Count the number of UserRegionMissionCounts
     * const count = await prisma.userRegionMissionCount.count({
     *   where: {
     *     // ... the filter for the UserRegionMissionCounts we want to count
     *   }
     * })
    **/
    count<T extends UserRegionMissionCountCountArgs>(
      args?: Subset<T, UserRegionMissionCountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRegionMissionCountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRegionMissionCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegionMissionCountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRegionMissionCountAggregateArgs>(args: Subset<T, UserRegionMissionCountAggregateArgs>): Prisma.PrismaPromise<GetUserRegionMissionCountAggregateType<T>>

    /**
     * Group by UserRegionMissionCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRegionMissionCountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRegionMissionCountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRegionMissionCountGroupByArgs['orderBy'] }
        : { orderBy?: UserRegionMissionCountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRegionMissionCountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRegionMissionCountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRegionMissionCount model
   */
  readonly fields: UserRegionMissionCountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRegionMissionCount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRegionMissionCountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRegionMissionCount model
   */
  interface UserRegionMissionCountFieldRefs {
    readonly userId: FieldRef<"UserRegionMissionCount", 'BigInt'>
    readonly regionId: FieldRef<"UserRegionMissionCount", 'BigInt'>
    readonly missionCount: FieldRef<"UserRegionMissionCount", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * UserRegionMissionCount findUnique
   */
  export type UserRegionMissionCountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegionMissionCount
     */
    select?: UserRegionMissionCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegionMissionCount
     */
    omit?: UserRegionMissionCountOmit<ExtArgs> | null
    /**
     * Filter, which UserRegionMissionCount to fetch.
     */
    where: UserRegionMissionCountWhereUniqueInput
  }

  /**
   * UserRegionMissionCount findUniqueOrThrow
   */
  export type UserRegionMissionCountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegionMissionCount
     */
    select?: UserRegionMissionCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegionMissionCount
     */
    omit?: UserRegionMissionCountOmit<ExtArgs> | null
    /**
     * Filter, which UserRegionMissionCount to fetch.
     */
    where: UserRegionMissionCountWhereUniqueInput
  }

  /**
   * UserRegionMissionCount findFirst
   */
  export type UserRegionMissionCountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegionMissionCount
     */
    select?: UserRegionMissionCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegionMissionCount
     */
    omit?: UserRegionMissionCountOmit<ExtArgs> | null
    /**
     * Filter, which UserRegionMissionCount to fetch.
     */
    where?: UserRegionMissionCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRegionMissionCounts to fetch.
     */
    orderBy?: UserRegionMissionCountOrderByWithRelationInput | UserRegionMissionCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRegionMissionCounts.
     */
    cursor?: UserRegionMissionCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRegionMissionCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRegionMissionCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRegionMissionCounts.
     */
    distinct?: UserRegionMissionCountScalarFieldEnum | UserRegionMissionCountScalarFieldEnum[]
  }

  /**
   * UserRegionMissionCount findFirstOrThrow
   */
  export type UserRegionMissionCountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegionMissionCount
     */
    select?: UserRegionMissionCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegionMissionCount
     */
    omit?: UserRegionMissionCountOmit<ExtArgs> | null
    /**
     * Filter, which UserRegionMissionCount to fetch.
     */
    where?: UserRegionMissionCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRegionMissionCounts to fetch.
     */
    orderBy?: UserRegionMissionCountOrderByWithRelationInput | UserRegionMissionCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRegionMissionCounts.
     */
    cursor?: UserRegionMissionCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRegionMissionCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRegionMissionCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRegionMissionCounts.
     */
    distinct?: UserRegionMissionCountScalarFieldEnum | UserRegionMissionCountScalarFieldEnum[]
  }

  /**
   * UserRegionMissionCount findMany
   */
  export type UserRegionMissionCountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegionMissionCount
     */
    select?: UserRegionMissionCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegionMissionCount
     */
    omit?: UserRegionMissionCountOmit<ExtArgs> | null
    /**
     * Filter, which UserRegionMissionCounts to fetch.
     */
    where?: UserRegionMissionCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRegionMissionCounts to fetch.
     */
    orderBy?: UserRegionMissionCountOrderByWithRelationInput | UserRegionMissionCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRegionMissionCounts.
     */
    cursor?: UserRegionMissionCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRegionMissionCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRegionMissionCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRegionMissionCounts.
     */
    distinct?: UserRegionMissionCountScalarFieldEnum | UserRegionMissionCountScalarFieldEnum[]
  }

  /**
   * UserRegionMissionCount create
   */
  export type UserRegionMissionCountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegionMissionCount
     */
    select?: UserRegionMissionCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegionMissionCount
     */
    omit?: UserRegionMissionCountOmit<ExtArgs> | null
    /**
     * The data needed to create a UserRegionMissionCount.
     */
    data: XOR<UserRegionMissionCountCreateInput, UserRegionMissionCountUncheckedCreateInput>
  }

  /**
   * UserRegionMissionCount createMany
   */
  export type UserRegionMissionCountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRegionMissionCounts.
     */
    data: UserRegionMissionCountCreateManyInput | UserRegionMissionCountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRegionMissionCount update
   */
  export type UserRegionMissionCountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegionMissionCount
     */
    select?: UserRegionMissionCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegionMissionCount
     */
    omit?: UserRegionMissionCountOmit<ExtArgs> | null
    /**
     * The data needed to update a UserRegionMissionCount.
     */
    data: XOR<UserRegionMissionCountUpdateInput, UserRegionMissionCountUncheckedUpdateInput>
    /**
     * Choose, which UserRegionMissionCount to update.
     */
    where: UserRegionMissionCountWhereUniqueInput
  }

  /**
   * UserRegionMissionCount updateMany
   */
  export type UserRegionMissionCountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRegionMissionCounts.
     */
    data: XOR<UserRegionMissionCountUpdateManyMutationInput, UserRegionMissionCountUncheckedUpdateManyInput>
    /**
     * Filter which UserRegionMissionCounts to update
     */
    where?: UserRegionMissionCountWhereInput
    /**
     * Limit how many UserRegionMissionCounts to update.
     */
    limit?: number
  }

  /**
   * UserRegionMissionCount upsert
   */
  export type UserRegionMissionCountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegionMissionCount
     */
    select?: UserRegionMissionCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegionMissionCount
     */
    omit?: UserRegionMissionCountOmit<ExtArgs> | null
    /**
     * The filter to search for the UserRegionMissionCount to update in case it exists.
     */
    where: UserRegionMissionCountWhereUniqueInput
    /**
     * In case the UserRegionMissionCount found by the `where` argument doesn't exist, create a new UserRegionMissionCount with this data.
     */
    create: XOR<UserRegionMissionCountCreateInput, UserRegionMissionCountUncheckedCreateInput>
    /**
     * In case the UserRegionMissionCount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRegionMissionCountUpdateInput, UserRegionMissionCountUncheckedUpdateInput>
  }

  /**
   * UserRegionMissionCount delete
   */
  export type UserRegionMissionCountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegionMissionCount
     */
    select?: UserRegionMissionCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegionMissionCount
     */
    omit?: UserRegionMissionCountOmit<ExtArgs> | null
    /**
     * Filter which UserRegionMissionCount to delete.
     */
    where: UserRegionMissionCountWhereUniqueInput
  }

  /**
   * UserRegionMissionCount deleteMany
   */
  export type UserRegionMissionCountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRegionMissionCounts to delete
     */
    where?: UserRegionMissionCountWhereInput
    /**
     * Limit how many UserRegionMissionCounts to delete.
     */
    limit?: number
  }

  /**
   * UserRegionMissionCount without action
   */
  export type UserRegionMissionCountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRegionMissionCount
     */
    select?: UserRegionMissionCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRegionMissionCount
     */
    omit?: UserRegionMissionCountOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FoodCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type FoodCategoryScalarFieldEnum = (typeof FoodCategoryScalarFieldEnum)[keyof typeof FoodCategoryScalarFieldEnum]


  export const InquiryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    content: 'content',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InquiryScalarFieldEnum = (typeof InquiryScalarFieldEnum)[keyof typeof InquiryScalarFieldEnum]


  export const InquiryImageScalarFieldEnum: {
    id: 'id',
    inquiryId: 'inquiryId',
    imageUrl: 'imageUrl',
    imageOrder: 'imageOrder',
    createdAt: 'createdAt'
  };

  export type InquiryImageScalarFieldEnum = (typeof InquiryImageScalarFieldEnum)[keyof typeof InquiryImageScalarFieldEnum]


  export const MissionScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    content: 'content',
    rewardPoint: 'rewardPoint',
    deadline: 'deadline',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MissionScalarFieldEnum = (typeof MissionScalarFieldEnum)[keyof typeof MissionScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    reviewId: 'reviewId',
    missionId: 'missionId',
    type: 'type',
    content: 'content',
    isRead: 'isRead',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const PointHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    point: 'point',
    storeName: 'storeName',
    missionContent: 'missionContent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PointHistoryScalarFieldEnum = (typeof PointHistoryScalarFieldEnum)[keyof typeof PointHistoryScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    userId: 'userId',
    rating: 'rating',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ReviewCommentScalarFieldEnum: {
    id: 'id',
    reviewId: 'reviewId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewCommentScalarFieldEnum = (typeof ReviewCommentScalarFieldEnum)[keyof typeof ReviewCommentScalarFieldEnum]


  export const ReviewImageScalarFieldEnum: {
    id: 'id',
    reviewId: 'reviewId',
    imageUrl: 'imageUrl',
    imageOrder: 'imageOrder',
    createdAt: 'createdAt'
  };

  export type ReviewImageScalarFieldEnum = (typeof ReviewImageScalarFieldEnum)[keyof typeof ReviewImageScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    foodCategoryId: 'foodCategoryId',
    regionId: 'regionId',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    businessStartHours: 'businessStartHours',
    businessEndHours: 'businessEndHours',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const StoreImageScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    imageUrl: 'imageUrl',
    imageOrder: 'imageOrder',
    createdAt: 'createdAt'
  };

  export type StoreImageScalarFieldEnum = (typeof StoreImageScalarFieldEnum)[keyof typeof StoreImageScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    gender: 'gender',
    birthDate: 'birthDate',
    regionId: 'regionId',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    point: 'point',
    email: 'email',
    phone: 'phone',
    eventNotificationEnabled: 'eventNotificationEnabled',
    reviewReplyNotificationEnabled: 'reviewReplyNotificationEnabled',
    inquiryReplyNotificationEnabled: 'inquiryReplyNotificationEnabled',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserFoodCategoryScalarFieldEnum: {
    foodCategoryId: 'foodCategoryId',
    userId: 'userId'
  };

  export type UserFoodCategoryScalarFieldEnum = (typeof UserFoodCategoryScalarFieldEnum)[keyof typeof UserFoodCategoryScalarFieldEnum]


  export const UserMissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    missionId: 'missionId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserMissionScalarFieldEnum = (typeof UserMissionScalarFieldEnum)[keyof typeof UserMissionScalarFieldEnum]


  export const UserRegionMissionCountScalarFieldEnum: {
    userId: 'userId',
    regionId: 'regionId',
    missionCount: 'missionCount'
  };

  export type UserRegionMissionCountScalarFieldEnum = (typeof UserRegionMissionCountScalarFieldEnum)[keyof typeof UserRegionMissionCountScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const FoodCategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type FoodCategoryOrderByRelevanceFieldEnum = (typeof FoodCategoryOrderByRelevanceFieldEnum)[keyof typeof FoodCategoryOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const InquiryOrderByRelevanceFieldEnum: {
    title: 'title',
    content: 'content'
  };

  export type InquiryOrderByRelevanceFieldEnum = (typeof InquiryOrderByRelevanceFieldEnum)[keyof typeof InquiryOrderByRelevanceFieldEnum]


  export const InquiryImageOrderByRelevanceFieldEnum: {
    imageUrl: 'imageUrl'
  };

  export type InquiryImageOrderByRelevanceFieldEnum = (typeof InquiryImageOrderByRelevanceFieldEnum)[keyof typeof InquiryImageOrderByRelevanceFieldEnum]


  export const MissionOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type MissionOrderByRelevanceFieldEnum = (typeof MissionOrderByRelevanceFieldEnum)[keyof typeof MissionOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    type: 'type',
    content: 'content'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const PointHistoryOrderByRelevanceFieldEnum: {
    type: 'type',
    storeName: 'storeName',
    missionContent: 'missionContent'
  };

  export type PointHistoryOrderByRelevanceFieldEnum = (typeof PointHistoryOrderByRelevanceFieldEnum)[keyof typeof PointHistoryOrderByRelevanceFieldEnum]


  export const RegionOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type RegionOrderByRelevanceFieldEnum = (typeof RegionOrderByRelevanceFieldEnum)[keyof typeof RegionOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  export const ReviewCommentOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type ReviewCommentOrderByRelevanceFieldEnum = (typeof ReviewCommentOrderByRelevanceFieldEnum)[keyof typeof ReviewCommentOrderByRelevanceFieldEnum]


  export const ReviewImageOrderByRelevanceFieldEnum: {
    imageUrl: 'imageUrl'
  };

  export type ReviewImageOrderByRelevanceFieldEnum = (typeof ReviewImageOrderByRelevanceFieldEnum)[keyof typeof ReviewImageOrderByRelevanceFieldEnum]


  export const StoreOrderByRelevanceFieldEnum: {
    name: 'name',
    address: 'address'
  };

  export type StoreOrderByRelevanceFieldEnum = (typeof StoreOrderByRelevanceFieldEnum)[keyof typeof StoreOrderByRelevanceFieldEnum]


  export const StoreImageOrderByRelevanceFieldEnum: {
    imageUrl: 'imageUrl'
  };

  export type StoreImageOrderByRelevanceFieldEnum = (typeof StoreImageOrderByRelevanceFieldEnum)[keyof typeof StoreImageOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    address: 'address',
    email: 'email',
    phone: 'phone'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'InquiryStatus'
   */
  export type EnumInquiryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InquiryStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'UserGender'
   */
  export type EnumUserGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserGender'>
    


  /**
   * Reference to a field of type 'UserMissionStatus'
   */
  export type EnumUserMissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserMissionStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type FoodCategoryWhereInput = {
    AND?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    OR?: FoodCategoryWhereInput[]
    NOT?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    id?: BigIntFilter<"FoodCategory"> | bigint | number
    name?: StringFilter<"FoodCategory"> | string
  }

  export type FoodCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    _relevance?: FoodCategoryOrderByRelevanceInput
  }

  export type FoodCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    OR?: FoodCategoryWhereInput[]
    NOT?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    name?: StringFilter<"FoodCategory"> | string
  }, "id">

  export type FoodCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: FoodCategoryCountOrderByAggregateInput
    _avg?: FoodCategoryAvgOrderByAggregateInput
    _max?: FoodCategoryMaxOrderByAggregateInput
    _min?: FoodCategoryMinOrderByAggregateInput
    _sum?: FoodCategorySumOrderByAggregateInput
  }

  export type FoodCategoryScalarWhereWithAggregatesInput = {
    AND?: FoodCategoryScalarWhereWithAggregatesInput | FoodCategoryScalarWhereWithAggregatesInput[]
    OR?: FoodCategoryScalarWhereWithAggregatesInput[]
    NOT?: FoodCategoryScalarWhereWithAggregatesInput | FoodCategoryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"FoodCategory"> | bigint | number
    name?: StringWithAggregatesFilter<"FoodCategory"> | string
  }

  export type InquiryWhereInput = {
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    id?: BigIntFilter<"Inquiry"> | bigint | number
    userId?: BigIntFilter<"Inquiry"> | bigint | number
    title?: StringFilter<"Inquiry"> | string
    content?: StringNullableFilter<"Inquiry"> | string | null
    status?: EnumInquiryStatusFilter<"Inquiry"> | $Enums.InquiryStatus
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Inquiry"> | Date | string | null
  }

  export type InquiryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: InquiryOrderByRelevanceInput
  }

  export type InquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: InquiryWhereInput | InquiryWhereInput[]
    OR?: InquiryWhereInput[]
    NOT?: InquiryWhereInput | InquiryWhereInput[]
    userId?: BigIntFilter<"Inquiry"> | bigint | number
    title?: StringFilter<"Inquiry"> | string
    content?: StringNullableFilter<"Inquiry"> | string | null
    status?: EnumInquiryStatusFilter<"Inquiry"> | $Enums.InquiryStatus
    createdAt?: DateTimeFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Inquiry"> | Date | string | null
  }, "id">

  export type InquiryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: InquiryCountOrderByAggregateInput
    _avg?: InquiryAvgOrderByAggregateInput
    _max?: InquiryMaxOrderByAggregateInput
    _min?: InquiryMinOrderByAggregateInput
    _sum?: InquirySumOrderByAggregateInput
  }

  export type InquiryScalarWhereWithAggregatesInput = {
    AND?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    OR?: InquiryScalarWhereWithAggregatesInput[]
    NOT?: InquiryScalarWhereWithAggregatesInput | InquiryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Inquiry"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"Inquiry"> | bigint | number
    title?: StringWithAggregatesFilter<"Inquiry"> | string
    content?: StringNullableWithAggregatesFilter<"Inquiry"> | string | null
    status?: EnumInquiryStatusWithAggregatesFilter<"Inquiry"> | $Enums.InquiryStatus
    createdAt?: DateTimeWithAggregatesFilter<"Inquiry"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Inquiry"> | Date | string | null
  }

  export type InquiryImageWhereInput = {
    AND?: InquiryImageWhereInput | InquiryImageWhereInput[]
    OR?: InquiryImageWhereInput[]
    NOT?: InquiryImageWhereInput | InquiryImageWhereInput[]
    id?: BigIntFilter<"InquiryImage"> | bigint | number
    inquiryId?: BigIntFilter<"InquiryImage"> | bigint | number
    imageUrl?: StringFilter<"InquiryImage"> | string
    imageOrder?: BigIntFilter<"InquiryImage"> | bigint | number
    createdAt?: DateTimeNullableFilter<"InquiryImage"> | Date | string | null
  }

  export type InquiryImageOrderByWithRelationInput = {
    id?: SortOrder
    inquiryId?: SortOrder
    imageUrl?: SortOrder
    imageOrder?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _relevance?: InquiryImageOrderByRelevanceInput
  }

  export type InquiryImageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: InquiryImageWhereInput | InquiryImageWhereInput[]
    OR?: InquiryImageWhereInput[]
    NOT?: InquiryImageWhereInput | InquiryImageWhereInput[]
    inquiryId?: BigIntFilter<"InquiryImage"> | bigint | number
    imageUrl?: StringFilter<"InquiryImage"> | string
    imageOrder?: BigIntFilter<"InquiryImage"> | bigint | number
    createdAt?: DateTimeNullableFilter<"InquiryImage"> | Date | string | null
  }, "id">

  export type InquiryImageOrderByWithAggregationInput = {
    id?: SortOrder
    inquiryId?: SortOrder
    imageUrl?: SortOrder
    imageOrder?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: InquiryImageCountOrderByAggregateInput
    _avg?: InquiryImageAvgOrderByAggregateInput
    _max?: InquiryImageMaxOrderByAggregateInput
    _min?: InquiryImageMinOrderByAggregateInput
    _sum?: InquiryImageSumOrderByAggregateInput
  }

  export type InquiryImageScalarWhereWithAggregatesInput = {
    AND?: InquiryImageScalarWhereWithAggregatesInput | InquiryImageScalarWhereWithAggregatesInput[]
    OR?: InquiryImageScalarWhereWithAggregatesInput[]
    NOT?: InquiryImageScalarWhereWithAggregatesInput | InquiryImageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"InquiryImage"> | bigint | number
    inquiryId?: BigIntWithAggregatesFilter<"InquiryImage"> | bigint | number
    imageUrl?: StringWithAggregatesFilter<"InquiryImage"> | string
    imageOrder?: BigIntWithAggregatesFilter<"InquiryImage"> | bigint | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"InquiryImage"> | Date | string | null
  }

  export type MissionWhereInput = {
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    id?: BigIntFilter<"Mission"> | bigint | number
    storeId?: BigIntFilter<"Mission"> | bigint | number
    content?: StringFilter<"Mission"> | string
    rewardPoint?: BigIntFilter<"Mission"> | bigint | number
    deadline?: BigIntNullableFilter<"Mission"> | bigint | number | null
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
  }

  export type MissionOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    content?: SortOrder
    rewardPoint?: SortOrder
    deadline?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: MissionOrderByRelevanceInput
  }

  export type MissionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: MissionWhereInput | MissionWhereInput[]
    OR?: MissionWhereInput[]
    NOT?: MissionWhereInput | MissionWhereInput[]
    storeId?: BigIntFilter<"Mission"> | bigint | number
    content?: StringFilter<"Mission"> | string
    rewardPoint?: BigIntFilter<"Mission"> | bigint | number
    deadline?: BigIntNullableFilter<"Mission"> | bigint | number | null
    createdAt?: DateTimeFilter<"Mission"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Mission"> | Date | string | null
  }, "id">

  export type MissionOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    content?: SortOrder
    rewardPoint?: SortOrder
    deadline?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: MissionCountOrderByAggregateInput
    _avg?: MissionAvgOrderByAggregateInput
    _max?: MissionMaxOrderByAggregateInput
    _min?: MissionMinOrderByAggregateInput
    _sum?: MissionSumOrderByAggregateInput
  }

  export type MissionScalarWhereWithAggregatesInput = {
    AND?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    OR?: MissionScalarWhereWithAggregatesInput[]
    NOT?: MissionScalarWhereWithAggregatesInput | MissionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Mission"> | bigint | number
    storeId?: BigIntWithAggregatesFilter<"Mission"> | bigint | number
    content?: StringWithAggregatesFilter<"Mission"> | string
    rewardPoint?: BigIntWithAggregatesFilter<"Mission"> | bigint | number
    deadline?: BigIntNullableWithAggregatesFilter<"Mission"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Mission"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Mission"> | Date | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: BigIntFilter<"Notification"> | bigint | number
    userId?: BigIntFilter<"Notification"> | bigint | number
    reviewId?: BigIntNullableFilter<"Notification"> | bigint | number | null
    missionId?: BigIntNullableFilter<"Notification"> | bigint | number | null
    type?: StringFilter<"Notification"> | string
    content?: StringFilter<"Notification"> | string
    isRead?: BoolNullableFilter<"Notification"> | boolean | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrderInput | SortOrder
    missionId?: SortOrderInput | SortOrder
    type?: SortOrder
    content?: SortOrder
    isRead?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: BigIntFilter<"Notification"> | bigint | number
    reviewId?: BigIntNullableFilter<"Notification"> | bigint | number | null
    missionId?: BigIntNullableFilter<"Notification"> | bigint | number | null
    type?: StringFilter<"Notification"> | string
    content?: StringFilter<"Notification"> | string
    isRead?: BoolNullableFilter<"Notification"> | boolean | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrderInput | SortOrder
    missionId?: SortOrderInput | SortOrder
    type?: SortOrder
    content?: SortOrder
    isRead?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Notification"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"Notification"> | bigint | number
    reviewId?: BigIntNullableWithAggregatesFilter<"Notification"> | bigint | number | null
    missionId?: BigIntNullableWithAggregatesFilter<"Notification"> | bigint | number | null
    type?: StringWithAggregatesFilter<"Notification"> | string
    content?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolNullableWithAggregatesFilter<"Notification"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
  }

  export type PointHistoryWhereInput = {
    AND?: PointHistoryWhereInput | PointHistoryWhereInput[]
    OR?: PointHistoryWhereInput[]
    NOT?: PointHistoryWhereInput | PointHistoryWhereInput[]
    id?: BigIntFilter<"PointHistory"> | bigint | number
    userId?: BigIntFilter<"PointHistory"> | bigint | number
    type?: StringFilter<"PointHistory"> | string
    point?: BigIntFilter<"PointHistory"> | bigint | number
    storeName?: StringNullableFilter<"PointHistory"> | string | null
    missionContent?: StringNullableFilter<"PointHistory"> | string | null
    createdAt?: DateTimeFilter<"PointHistory"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PointHistory"> | Date | string | null
  }

  export type PointHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    point?: SortOrder
    storeName?: SortOrderInput | SortOrder
    missionContent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: PointHistoryOrderByRelevanceInput
  }

  export type PointHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: PointHistoryWhereInput | PointHistoryWhereInput[]
    OR?: PointHistoryWhereInput[]
    NOT?: PointHistoryWhereInput | PointHistoryWhereInput[]
    userId?: BigIntFilter<"PointHistory"> | bigint | number
    type?: StringFilter<"PointHistory"> | string
    point?: BigIntFilter<"PointHistory"> | bigint | number
    storeName?: StringNullableFilter<"PointHistory"> | string | null
    missionContent?: StringNullableFilter<"PointHistory"> | string | null
    createdAt?: DateTimeFilter<"PointHistory"> | Date | string
    updatedAt?: DateTimeNullableFilter<"PointHistory"> | Date | string | null
  }, "id">

  export type PointHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    point?: SortOrder
    storeName?: SortOrderInput | SortOrder
    missionContent?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PointHistoryCountOrderByAggregateInput
    _avg?: PointHistoryAvgOrderByAggregateInput
    _max?: PointHistoryMaxOrderByAggregateInput
    _min?: PointHistoryMinOrderByAggregateInput
    _sum?: PointHistorySumOrderByAggregateInput
  }

  export type PointHistoryScalarWhereWithAggregatesInput = {
    AND?: PointHistoryScalarWhereWithAggregatesInput | PointHistoryScalarWhereWithAggregatesInput[]
    OR?: PointHistoryScalarWhereWithAggregatesInput[]
    NOT?: PointHistoryScalarWhereWithAggregatesInput | PointHistoryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"PointHistory"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"PointHistory"> | bigint | number
    type?: StringWithAggregatesFilter<"PointHistory"> | string
    point?: BigIntWithAggregatesFilter<"PointHistory"> | bigint | number
    storeName?: StringNullableWithAggregatesFilter<"PointHistory"> | string | null
    missionContent?: StringNullableWithAggregatesFilter<"PointHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PointHistory"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"PointHistory"> | Date | string | null
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: BigIntFilter<"Region"> | bigint | number
    name?: StringFilter<"Region"> | string
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    _relevance?: RegionOrderByRelevanceInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    name?: StringFilter<"Region"> | string
  }, "id">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RegionCountOrderByAggregateInput
    _avg?: RegionAvgOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
    _sum?: RegionSumOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Region"> | bigint | number
    name?: StringWithAggregatesFilter<"Region"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: BigIntFilter<"Review"> | bigint | number
    storeId?: BigIntFilter<"Review"> | bigint | number
    userId?: BigIntFilter<"Review"> | bigint | number
    rating?: DecimalFilter<"Review"> | Decimal | DecimalJsLike | number | string
    content?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Review"> | Date | string | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    storeId?: BigIntFilter<"Review"> | bigint | number
    userId?: BigIntFilter<"Review"> | bigint | number
    rating?: DecimalFilter<"Review"> | Decimal | DecimalJsLike | number | string
    content?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Review"> | Date | string | null
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Review"> | bigint | number
    storeId?: BigIntWithAggregatesFilter<"Review"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"Review"> | bigint | number
    rating?: DecimalWithAggregatesFilter<"Review"> | Decimal | DecimalJsLike | number | string
    content?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Review"> | Date | string | null
  }

  export type ReviewCommentWhereInput = {
    AND?: ReviewCommentWhereInput | ReviewCommentWhereInput[]
    OR?: ReviewCommentWhereInput[]
    NOT?: ReviewCommentWhereInput | ReviewCommentWhereInput[]
    id?: BigIntFilter<"ReviewComment"> | bigint | number
    reviewId?: BigIntFilter<"ReviewComment"> | bigint | number
    content?: StringNullableFilter<"ReviewComment"> | string | null
    createdAt?: DateTimeFilter<"ReviewComment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ReviewComment"> | Date | string | null
  }

  export type ReviewCommentOrderByWithRelationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: ReviewCommentOrderByRelevanceInput
  }

  export type ReviewCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ReviewCommentWhereInput | ReviewCommentWhereInput[]
    OR?: ReviewCommentWhereInput[]
    NOT?: ReviewCommentWhereInput | ReviewCommentWhereInput[]
    reviewId?: BigIntFilter<"ReviewComment"> | bigint | number
    content?: StringNullableFilter<"ReviewComment"> | string | null
    createdAt?: DateTimeFilter<"ReviewComment"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ReviewComment"> | Date | string | null
  }, "id">

  export type ReviewCommentOrderByWithAggregationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    content?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ReviewCommentCountOrderByAggregateInput
    _avg?: ReviewCommentAvgOrderByAggregateInput
    _max?: ReviewCommentMaxOrderByAggregateInput
    _min?: ReviewCommentMinOrderByAggregateInput
    _sum?: ReviewCommentSumOrderByAggregateInput
  }

  export type ReviewCommentScalarWhereWithAggregatesInput = {
    AND?: ReviewCommentScalarWhereWithAggregatesInput | ReviewCommentScalarWhereWithAggregatesInput[]
    OR?: ReviewCommentScalarWhereWithAggregatesInput[]
    NOT?: ReviewCommentScalarWhereWithAggregatesInput | ReviewCommentScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ReviewComment"> | bigint | number
    reviewId?: BigIntWithAggregatesFilter<"ReviewComment"> | bigint | number
    content?: StringNullableWithAggregatesFilter<"ReviewComment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReviewComment"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ReviewComment"> | Date | string | null
  }

  export type ReviewImageWhereInput = {
    AND?: ReviewImageWhereInput | ReviewImageWhereInput[]
    OR?: ReviewImageWhereInput[]
    NOT?: ReviewImageWhereInput | ReviewImageWhereInput[]
    id?: BigIntFilter<"ReviewImage"> | bigint | number
    reviewId?: BigIntFilter<"ReviewImage"> | bigint | number
    imageUrl?: StringFilter<"ReviewImage"> | string
    imageOrder?: BigIntFilter<"ReviewImage"> | bigint | number
    createdAt?: DateTimeNullableFilter<"ReviewImage"> | Date | string | null
  }

  export type ReviewImageOrderByWithRelationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    imageUrl?: SortOrder
    imageOrder?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _relevance?: ReviewImageOrderByRelevanceInput
  }

  export type ReviewImageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ReviewImageWhereInput | ReviewImageWhereInput[]
    OR?: ReviewImageWhereInput[]
    NOT?: ReviewImageWhereInput | ReviewImageWhereInput[]
    reviewId?: BigIntFilter<"ReviewImage"> | bigint | number
    imageUrl?: StringFilter<"ReviewImage"> | string
    imageOrder?: BigIntFilter<"ReviewImage"> | bigint | number
    createdAt?: DateTimeNullableFilter<"ReviewImage"> | Date | string | null
  }, "id">

  export type ReviewImageOrderByWithAggregationInput = {
    id?: SortOrder
    reviewId?: SortOrder
    imageUrl?: SortOrder
    imageOrder?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: ReviewImageCountOrderByAggregateInput
    _avg?: ReviewImageAvgOrderByAggregateInput
    _max?: ReviewImageMaxOrderByAggregateInput
    _min?: ReviewImageMinOrderByAggregateInput
    _sum?: ReviewImageSumOrderByAggregateInput
  }

  export type ReviewImageScalarWhereWithAggregatesInput = {
    AND?: ReviewImageScalarWhereWithAggregatesInput | ReviewImageScalarWhereWithAggregatesInput[]
    OR?: ReviewImageScalarWhereWithAggregatesInput[]
    NOT?: ReviewImageScalarWhereWithAggregatesInput | ReviewImageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ReviewImage"> | bigint | number
    reviewId?: BigIntWithAggregatesFilter<"ReviewImage"> | bigint | number
    imageUrl?: StringWithAggregatesFilter<"ReviewImage"> | string
    imageOrder?: BigIntWithAggregatesFilter<"ReviewImage"> | bigint | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"ReviewImage"> | Date | string | null
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: BigIntFilter<"Store"> | bigint | number
    name?: StringFilter<"Store"> | string
    foodCategoryId?: BigIntFilter<"Store"> | bigint | number
    regionId?: BigIntFilter<"Store"> | bigint | number
    address?: StringFilter<"Store"> | string
    latitude?: DecimalFilter<"Store"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Store"> | Decimal | DecimalJsLike | number | string
    businessStartHours?: DateTimeNullableFilter<"Store"> | Date | string | null
    businessEndHours?: DateTimeNullableFilter<"Store"> | Date | string | null
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Store"> | Date | string | null
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    foodCategoryId?: SortOrder
    regionId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    businessStartHours?: SortOrderInput | SortOrder
    businessEndHours?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: StoreOrderByRelevanceInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    name?: StringFilter<"Store"> | string
    foodCategoryId?: BigIntFilter<"Store"> | bigint | number
    regionId?: BigIntFilter<"Store"> | bigint | number
    address?: StringFilter<"Store"> | string
    latitude?: DecimalFilter<"Store"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Store"> | Decimal | DecimalJsLike | number | string
    businessStartHours?: DateTimeNullableFilter<"Store"> | Date | string | null
    businessEndHours?: DateTimeNullableFilter<"Store"> | Date | string | null
    createdAt?: DateTimeFilter<"Store"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Store"> | Date | string | null
  }, "id">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    foodCategoryId?: SortOrder
    regionId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    businessStartHours?: SortOrderInput | SortOrder
    businessEndHours?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Store"> | bigint | number
    name?: StringWithAggregatesFilter<"Store"> | string
    foodCategoryId?: BigIntWithAggregatesFilter<"Store"> | bigint | number
    regionId?: BigIntWithAggregatesFilter<"Store"> | bigint | number
    address?: StringWithAggregatesFilter<"Store"> | string
    latitude?: DecimalWithAggregatesFilter<"Store"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"Store"> | Decimal | DecimalJsLike | number | string
    businessStartHours?: DateTimeNullableWithAggregatesFilter<"Store"> | Date | string | null
    businessEndHours?: DateTimeNullableWithAggregatesFilter<"Store"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Store"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Store"> | Date | string | null
  }

  export type StoreImageWhereInput = {
    AND?: StoreImageWhereInput | StoreImageWhereInput[]
    OR?: StoreImageWhereInput[]
    NOT?: StoreImageWhereInput | StoreImageWhereInput[]
    id?: BigIntFilter<"StoreImage"> | bigint | number
    storeId?: BigIntFilter<"StoreImage"> | bigint | number
    imageUrl?: StringFilter<"StoreImage"> | string
    imageOrder?: BigIntFilter<"StoreImage"> | bigint | number
    createdAt?: DateTimeNullableFilter<"StoreImage"> | Date | string | null
  }

  export type StoreImageOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    imageUrl?: SortOrder
    imageOrder?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _relevance?: StoreImageOrderByRelevanceInput
  }

  export type StoreImageWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: StoreImageWhereInput | StoreImageWhereInput[]
    OR?: StoreImageWhereInput[]
    NOT?: StoreImageWhereInput | StoreImageWhereInput[]
    storeId?: BigIntFilter<"StoreImage"> | bigint | number
    imageUrl?: StringFilter<"StoreImage"> | string
    imageOrder?: BigIntFilter<"StoreImage"> | bigint | number
    createdAt?: DateTimeNullableFilter<"StoreImage"> | Date | string | null
  }, "id">

  export type StoreImageOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    imageUrl?: SortOrder
    imageOrder?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: StoreImageCountOrderByAggregateInput
    _avg?: StoreImageAvgOrderByAggregateInput
    _max?: StoreImageMaxOrderByAggregateInput
    _min?: StoreImageMinOrderByAggregateInput
    _sum?: StoreImageSumOrderByAggregateInput
  }

  export type StoreImageScalarWhereWithAggregatesInput = {
    AND?: StoreImageScalarWhereWithAggregatesInput | StoreImageScalarWhereWithAggregatesInput[]
    OR?: StoreImageScalarWhereWithAggregatesInput[]
    NOT?: StoreImageScalarWhereWithAggregatesInput | StoreImageScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"StoreImage"> | bigint | number
    storeId?: BigIntWithAggregatesFilter<"StoreImage"> | bigint | number
    imageUrl?: StringWithAggregatesFilter<"StoreImage"> | string
    imageOrder?: BigIntWithAggregatesFilter<"StoreImage"> | bigint | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"StoreImage"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    name?: StringFilter<"User"> | string
    gender?: EnumUserGenderFilter<"User"> | $Enums.UserGender
    birthDate?: DateTimeFilter<"User"> | Date | string
    regionId?: BigIntFilter<"User"> | bigint | number
    address?: StringFilter<"User"> | string
    latitude?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    point?: BigIntNullableFilter<"User"> | bigint | number | null
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    eventNotificationEnabled?: BoolNullableFilter<"User"> | boolean | null
    reviewReplyNotificationEnabled?: BoolNullableFilter<"User"> | boolean | null
    inquiryReplyNotificationEnabled?: BoolNullableFilter<"User"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    regionId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    point?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    eventNotificationEnabled?: SortOrderInput | SortOrder
    reviewReplyNotificationEnabled?: SortOrderInput | SortOrder
    inquiryReplyNotificationEnabled?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    gender?: EnumUserGenderFilter<"User"> | $Enums.UserGender
    birthDate?: DateTimeFilter<"User"> | Date | string
    regionId?: BigIntFilter<"User"> | bigint | number
    address?: StringFilter<"User"> | string
    latitude?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    point?: BigIntNullableFilter<"User"> | bigint | number | null
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    eventNotificationEnabled?: BoolNullableFilter<"User"> | boolean | null
    reviewReplyNotificationEnabled?: BoolNullableFilter<"User"> | boolean | null
    inquiryReplyNotificationEnabled?: BoolNullableFilter<"User"> | boolean | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    regionId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    point?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    eventNotificationEnabled?: SortOrderInput | SortOrder
    reviewReplyNotificationEnabled?: SortOrderInput | SortOrder
    inquiryReplyNotificationEnabled?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    name?: StringWithAggregatesFilter<"User"> | string
    gender?: EnumUserGenderWithAggregatesFilter<"User"> | $Enums.UserGender
    birthDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    regionId?: BigIntWithAggregatesFilter<"User"> | bigint | number
    address?: StringWithAggregatesFilter<"User"> | string
    latitude?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    point?: BigIntNullableWithAggregatesFilter<"User"> | bigint | number | null
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    eventNotificationEnabled?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    reviewReplyNotificationEnabled?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    inquiryReplyNotificationEnabled?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type UserFoodCategoryWhereInput = {
    AND?: UserFoodCategoryWhereInput | UserFoodCategoryWhereInput[]
    OR?: UserFoodCategoryWhereInput[]
    NOT?: UserFoodCategoryWhereInput | UserFoodCategoryWhereInput[]
    foodCategoryId?: BigIntFilter<"UserFoodCategory"> | bigint | number
    userId?: BigIntFilter<"UserFoodCategory"> | bigint | number
  }

  export type UserFoodCategoryOrderByWithRelationInput = {
    foodCategoryId?: SortOrder
    userId?: SortOrder
  }

  export type UserFoodCategoryWhereUniqueInput = Prisma.AtLeast<{
    foodCategoryId_userId?: UserFoodCategoryFoodCategoryIdUserIdCompoundUniqueInput
    AND?: UserFoodCategoryWhereInput | UserFoodCategoryWhereInput[]
    OR?: UserFoodCategoryWhereInput[]
    NOT?: UserFoodCategoryWhereInput | UserFoodCategoryWhereInput[]
    foodCategoryId?: BigIntFilter<"UserFoodCategory"> | bigint | number
    userId?: BigIntFilter<"UserFoodCategory"> | bigint | number
  }, "foodCategoryId_userId">

  export type UserFoodCategoryOrderByWithAggregationInput = {
    foodCategoryId?: SortOrder
    userId?: SortOrder
    _count?: UserFoodCategoryCountOrderByAggregateInput
    _avg?: UserFoodCategoryAvgOrderByAggregateInput
    _max?: UserFoodCategoryMaxOrderByAggregateInput
    _min?: UserFoodCategoryMinOrderByAggregateInput
    _sum?: UserFoodCategorySumOrderByAggregateInput
  }

  export type UserFoodCategoryScalarWhereWithAggregatesInput = {
    AND?: UserFoodCategoryScalarWhereWithAggregatesInput | UserFoodCategoryScalarWhereWithAggregatesInput[]
    OR?: UserFoodCategoryScalarWhereWithAggregatesInput[]
    NOT?: UserFoodCategoryScalarWhereWithAggregatesInput | UserFoodCategoryScalarWhereWithAggregatesInput[]
    foodCategoryId?: BigIntWithAggregatesFilter<"UserFoodCategory"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"UserFoodCategory"> | bigint | number
  }

  export type UserMissionWhereInput = {
    AND?: UserMissionWhereInput | UserMissionWhereInput[]
    OR?: UserMissionWhereInput[]
    NOT?: UserMissionWhereInput | UserMissionWhereInput[]
    id?: BigIntFilter<"UserMission"> | bigint | number
    userId?: BigIntFilter<"UserMission"> | bigint | number
    missionId?: BigIntFilter<"UserMission"> | bigint | number
    status?: EnumUserMissionStatusFilter<"UserMission"> | $Enums.UserMissionStatus
    createdAt?: DateTimeFilter<"UserMission"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserMission"> | Date | string | null
  }

  export type UserMissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type UserMissionWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UserMissionWhereInput | UserMissionWhereInput[]
    OR?: UserMissionWhereInput[]
    NOT?: UserMissionWhereInput | UserMissionWhereInput[]
    userId?: BigIntFilter<"UserMission"> | bigint | number
    missionId?: BigIntFilter<"UserMission"> | bigint | number
    status?: EnumUserMissionStatusFilter<"UserMission"> | $Enums.UserMissionStatus
    createdAt?: DateTimeFilter<"UserMission"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserMission"> | Date | string | null
  }, "id">

  export type UserMissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: UserMissionCountOrderByAggregateInput
    _avg?: UserMissionAvgOrderByAggregateInput
    _max?: UserMissionMaxOrderByAggregateInput
    _min?: UserMissionMinOrderByAggregateInput
    _sum?: UserMissionSumOrderByAggregateInput
  }

  export type UserMissionScalarWhereWithAggregatesInput = {
    AND?: UserMissionScalarWhereWithAggregatesInput | UserMissionScalarWhereWithAggregatesInput[]
    OR?: UserMissionScalarWhereWithAggregatesInput[]
    NOT?: UserMissionScalarWhereWithAggregatesInput | UserMissionScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"UserMission"> | bigint | number
    userId?: BigIntWithAggregatesFilter<"UserMission"> | bigint | number
    missionId?: BigIntWithAggregatesFilter<"UserMission"> | bigint | number
    status?: EnumUserMissionStatusWithAggregatesFilter<"UserMission"> | $Enums.UserMissionStatus
    createdAt?: DateTimeWithAggregatesFilter<"UserMission"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"UserMission"> | Date | string | null
  }

  export type UserRegionMissionCountWhereInput = {
    AND?: UserRegionMissionCountWhereInput | UserRegionMissionCountWhereInput[]
    OR?: UserRegionMissionCountWhereInput[]
    NOT?: UserRegionMissionCountWhereInput | UserRegionMissionCountWhereInput[]
    userId?: BigIntFilter<"UserRegionMissionCount"> | bigint | number
    regionId?: BigIntFilter<"UserRegionMissionCount"> | bigint | number
    missionCount?: BigIntNullableFilter<"UserRegionMissionCount"> | bigint | number | null
  }

  export type UserRegionMissionCountOrderByWithRelationInput = {
    userId?: SortOrder
    regionId?: SortOrder
    missionCount?: SortOrderInput | SortOrder
  }

  export type UserRegionMissionCountWhereUniqueInput = Prisma.AtLeast<{
    userId_regionId?: UserRegionMissionCountUserIdRegionIdCompoundUniqueInput
    AND?: UserRegionMissionCountWhereInput | UserRegionMissionCountWhereInput[]
    OR?: UserRegionMissionCountWhereInput[]
    NOT?: UserRegionMissionCountWhereInput | UserRegionMissionCountWhereInput[]
    userId?: BigIntFilter<"UserRegionMissionCount"> | bigint | number
    regionId?: BigIntFilter<"UserRegionMissionCount"> | bigint | number
    missionCount?: BigIntNullableFilter<"UserRegionMissionCount"> | bigint | number | null
  }, "userId_regionId">

  export type UserRegionMissionCountOrderByWithAggregationInput = {
    userId?: SortOrder
    regionId?: SortOrder
    missionCount?: SortOrderInput | SortOrder
    _count?: UserRegionMissionCountCountOrderByAggregateInput
    _avg?: UserRegionMissionCountAvgOrderByAggregateInput
    _max?: UserRegionMissionCountMaxOrderByAggregateInput
    _min?: UserRegionMissionCountMinOrderByAggregateInput
    _sum?: UserRegionMissionCountSumOrderByAggregateInput
  }

  export type UserRegionMissionCountScalarWhereWithAggregatesInput = {
    AND?: UserRegionMissionCountScalarWhereWithAggregatesInput | UserRegionMissionCountScalarWhereWithAggregatesInput[]
    OR?: UserRegionMissionCountScalarWhereWithAggregatesInput[]
    NOT?: UserRegionMissionCountScalarWhereWithAggregatesInput | UserRegionMissionCountScalarWhereWithAggregatesInput[]
    userId?: BigIntWithAggregatesFilter<"UserRegionMissionCount"> | bigint | number
    regionId?: BigIntWithAggregatesFilter<"UserRegionMissionCount"> | bigint | number
    missionCount?: BigIntNullableWithAggregatesFilter<"UserRegionMissionCount"> | bigint | number | null
  }

  export type FoodCategoryCreateInput = {
    id?: bigint | number
    name: string
  }

  export type FoodCategoryUncheckedCreateInput = {
    id?: bigint | number
    name: string
  }

  export type FoodCategoryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCategoryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCategoryCreateManyInput = {
    id?: bigint | number
    name: string
  }

  export type FoodCategoryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCategoryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type InquiryCreateInput = {
    id?: bigint | number
    userId: bigint | number
    title: string
    content?: string | null
    status: $Enums.InquiryStatus
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type InquiryUncheckedCreateInput = {
    id?: bigint | number
    userId: bigint | number
    title: string
    content?: string | null
    status: $Enums.InquiryStatus
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type InquiryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InquiryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InquiryCreateManyInput = {
    id?: bigint | number
    userId: bigint | number
    title: string
    content?: string | null
    status: $Enums.InquiryStatus
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type InquiryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InquiryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInquiryStatusFieldUpdateOperationsInput | $Enums.InquiryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InquiryImageCreateInput = {
    id?: bigint | number
    inquiryId: bigint | number
    imageUrl: string
    imageOrder: bigint | number
    createdAt?: Date | string | null
  }

  export type InquiryImageUncheckedCreateInput = {
    id?: bigint | number
    inquiryId: bigint | number
    imageUrl: string
    imageOrder: bigint | number
    createdAt?: Date | string | null
  }

  export type InquiryImageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    inquiryId?: BigIntFieldUpdateOperationsInput | bigint | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageOrder?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InquiryImageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    inquiryId?: BigIntFieldUpdateOperationsInput | bigint | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageOrder?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InquiryImageCreateManyInput = {
    id?: bigint | number
    inquiryId: bigint | number
    imageUrl: string
    imageOrder: bigint | number
    createdAt?: Date | string | null
  }

  export type InquiryImageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    inquiryId?: BigIntFieldUpdateOperationsInput | bigint | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageOrder?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InquiryImageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    inquiryId?: BigIntFieldUpdateOperationsInput | bigint | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageOrder?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MissionCreateInput = {
    id?: bigint | number
    storeId: bigint | number
    content: string
    rewardPoint: bigint | number
    deadline?: bigint | number | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type MissionUncheckedCreateInput = {
    id?: bigint | number
    storeId: bigint | number
    content: string
    rewardPoint: bigint | number
    deadline?: bigint | number | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type MissionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    rewardPoint?: BigIntFieldUpdateOperationsInput | bigint | number
    deadline?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MissionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    rewardPoint?: BigIntFieldUpdateOperationsInput | bigint | number
    deadline?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MissionCreateManyInput = {
    id?: bigint | number
    storeId: bigint | number
    content: string
    rewardPoint: bigint | number
    deadline?: bigint | number | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type MissionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    rewardPoint?: BigIntFieldUpdateOperationsInput | bigint | number
    deadline?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MissionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: StringFieldUpdateOperationsInput | string
    rewardPoint?: BigIntFieldUpdateOperationsInput | bigint | number
    deadline?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationCreateInput = {
    id?: bigint | number
    userId: bigint | number
    reviewId?: bigint | number | null
    missionId?: bigint | number | null
    type: string
    content: string
    isRead?: boolean | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type NotificationUncheckedCreateInput = {
    id?: bigint | number
    userId: bigint | number
    reviewId?: bigint | number | null
    missionId?: bigint | number | null
    type: string
    content: string
    isRead?: boolean | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type NotificationUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    reviewId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    missionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    reviewId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    missionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationCreateManyInput = {
    id?: bigint | number
    userId: bigint | number
    reviewId?: bigint | number | null
    missionId?: bigint | number | null
    type: string
    content: string
    isRead?: boolean | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type NotificationUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    reviewId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    missionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    reviewId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    missionId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PointHistoryCreateInput = {
    id?: bigint | number
    userId: bigint | number
    type: string
    point: bigint | number
    storeName?: string | null
    missionContent?: string | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type PointHistoryUncheckedCreateInput = {
    id?: bigint | number
    userId: bigint | number
    type: string
    point: bigint | number
    storeName?: string | null
    missionContent?: string | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type PointHistoryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    point?: BigIntFieldUpdateOperationsInput | bigint | number
    storeName?: NullableStringFieldUpdateOperationsInput | string | null
    missionContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PointHistoryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    point?: BigIntFieldUpdateOperationsInput | bigint | number
    storeName?: NullableStringFieldUpdateOperationsInput | string | null
    missionContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PointHistoryCreateManyInput = {
    id?: bigint | number
    userId: bigint | number
    type: string
    point: bigint | number
    storeName?: string | null
    missionContent?: string | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type PointHistoryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    point?: BigIntFieldUpdateOperationsInput | bigint | number
    storeName?: NullableStringFieldUpdateOperationsInput | string | null
    missionContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PointHistoryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    point?: BigIntFieldUpdateOperationsInput | bigint | number
    storeName?: NullableStringFieldUpdateOperationsInput | string | null
    missionContent?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RegionCreateInput = {
    id?: bigint | number
    name: string
  }

  export type RegionUncheckedCreateInput = {
    id?: bigint | number
    name: string
  }

  export type RegionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionCreateManyInput = {
    id?: bigint | number
    name: string
  }

  export type RegionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    id?: bigint | number
    storeId: bigint | number
    userId: bigint | number
    rating: Decimal | DecimalJsLike | number | string
    content?: string | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type ReviewUncheckedCreateInput = {
    id?: bigint | number
    storeId: bigint | number
    userId: bigint | number
    rating: Decimal | DecimalJsLike | number | string
    content?: string | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type ReviewUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCreateManyInput = {
    id?: bigint | number
    storeId: bigint | number
    userId: bigint | number
    rating: Decimal | DecimalJsLike | number | string
    content?: string | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type ReviewUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    rating?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCommentCreateInput = {
    id?: bigint | number
    reviewId: bigint | number
    content?: string | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type ReviewCommentUncheckedCreateInput = {
    id?: bigint | number
    reviewId: bigint | number
    content?: string | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type ReviewCommentUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCommentUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCommentCreateManyInput = {
    id?: bigint | number
    reviewId: bigint | number
    content?: string | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type ReviewCommentUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCommentUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewImageCreateInput = {
    id?: bigint | number
    reviewId: bigint | number
    imageUrl: string
    imageOrder: bigint | number
    createdAt?: Date | string | null
  }

  export type ReviewImageUncheckedCreateInput = {
    id?: bigint | number
    reviewId: bigint | number
    imageUrl: string
    imageOrder: bigint | number
    createdAt?: Date | string | null
  }

  export type ReviewImageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageOrder?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewImageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageOrder?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewImageCreateManyInput = {
    id?: bigint | number
    reviewId: bigint | number
    imageUrl: string
    imageOrder: bigint | number
    createdAt?: Date | string | null
  }

  export type ReviewImageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageOrder?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewImageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    reviewId?: BigIntFieldUpdateOperationsInput | bigint | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageOrder?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreCreateInput = {
    id?: bigint | number
    name: string
    foodCategoryId: bigint | number
    regionId: bigint | number
    address: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    businessStartHours?: Date | string | null
    businessEndHours?: Date | string | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type StoreUncheckedCreateInput = {
    id?: bigint | number
    name: string
    foodCategoryId: bigint | number
    regionId: bigint | number
    address: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    businessStartHours?: Date | string | null
    businessEndHours?: Date | string | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type StoreUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    foodCategoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    address?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    businessStartHours?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    businessEndHours?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    foodCategoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    address?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    businessStartHours?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    businessEndHours?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreCreateManyInput = {
    id?: bigint | number
    name: string
    foodCategoryId: bigint | number
    regionId: bigint | number
    address: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    businessStartHours?: Date | string | null
    businessEndHours?: Date | string | null
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type StoreUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    foodCategoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    address?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    businessStartHours?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    businessEndHours?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    foodCategoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    address?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    businessStartHours?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    businessEndHours?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreImageCreateInput = {
    id?: bigint | number
    storeId: bigint | number
    imageUrl: string
    imageOrder: bigint | number
    createdAt?: Date | string | null
  }

  export type StoreImageUncheckedCreateInput = {
    id?: bigint | number
    storeId: bigint | number
    imageUrl: string
    imageOrder: bigint | number
    createdAt?: Date | string | null
  }

  export type StoreImageUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageOrder?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreImageUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageOrder?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreImageCreateManyInput = {
    id?: bigint | number
    storeId: bigint | number
    imageUrl: string
    imageOrder: bigint | number
    createdAt?: Date | string | null
  }

  export type StoreImageUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageOrder?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StoreImageUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    storeId?: BigIntFieldUpdateOperationsInput | bigint | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageOrder?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    id?: bigint | number
    name: string
    gender: $Enums.UserGender
    birthDate: Date | string
    regionId: bigint | number
    address: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt: Date | string
    point?: bigint | number | null
    email: string
    phone?: string | null
    eventNotificationEnabled?: boolean | null
    reviewReplyNotificationEnabled?: boolean | null
    inquiryReplyNotificationEnabled?: boolean | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    name: string
    gender: $Enums.UserGender
    birthDate: Date | string
    regionId: bigint | number
    address: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt: Date | string
    point?: bigint | number | null
    email: string
    phone?: string | null
    eventNotificationEnabled?: boolean | null
    reviewReplyNotificationEnabled?: boolean | null
    inquiryReplyNotificationEnabled?: boolean | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    address?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    eventNotificationEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reviewReplyNotificationEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    inquiryReplyNotificationEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    address?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    eventNotificationEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reviewReplyNotificationEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    inquiryReplyNotificationEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    name: string
    gender: $Enums.UserGender
    birthDate: Date | string
    regionId: bigint | number
    address: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    createdAt: Date | string
    point?: bigint | number | null
    email: string
    phone?: string | null
    eventNotificationEnabled?: boolean | null
    reviewReplyNotificationEnabled?: boolean | null
    inquiryReplyNotificationEnabled?: boolean | null
    deletedAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    address?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    eventNotificationEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reviewReplyNotificationEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    inquiryReplyNotificationEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    gender?: EnumUserGenderFieldUpdateOperationsInput | $Enums.UserGender
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    address?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    point?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    eventNotificationEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    reviewReplyNotificationEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    inquiryReplyNotificationEnabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserFoodCategoryCreateInput = {
    foodCategoryId: bigint | number
    userId: bigint | number
  }

  export type UserFoodCategoryUncheckedCreateInput = {
    foodCategoryId: bigint | number
    userId: bigint | number
  }

  export type UserFoodCategoryUpdateInput = {
    foodCategoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserFoodCategoryUncheckedUpdateInput = {
    foodCategoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserFoodCategoryCreateManyInput = {
    foodCategoryId: bigint | number
    userId: bigint | number
  }

  export type UserFoodCategoryUpdateManyMutationInput = {
    foodCategoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserFoodCategoryUncheckedUpdateManyInput = {
    foodCategoryId?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserMissionCreateInput = {
    id?: bigint | number
    userId: bigint | number
    missionId: bigint | number
    status: $Enums.UserMissionStatus
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type UserMissionUncheckedCreateInput = {
    id?: bigint | number
    userId: bigint | number
    missionId: bigint | number
    status: $Enums.UserMissionStatus
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type UserMissionUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumUserMissionStatusFieldUpdateOperationsInput | $Enums.UserMissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserMissionUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumUserMissionStatusFieldUpdateOperationsInput | $Enums.UserMissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserMissionCreateManyInput = {
    id?: bigint | number
    userId: bigint | number
    missionId: bigint | number
    status: $Enums.UserMissionStatus
    createdAt: Date | string
    updatedAt?: Date | string | null
  }

  export type UserMissionUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumUserMissionStatusFieldUpdateOperationsInput | $Enums.UserMissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserMissionUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    missionId?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: EnumUserMissionStatusFieldUpdateOperationsInput | $Enums.UserMissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRegionMissionCountCreateInput = {
    userId: bigint | number
    regionId: bigint | number
    missionCount?: bigint | number | null
  }

  export type UserRegionMissionCountUncheckedCreateInput = {
    userId: bigint | number
    regionId: bigint | number
    missionCount?: bigint | number | null
  }

  export type UserRegionMissionCountUpdateInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    missionCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type UserRegionMissionCountUncheckedUpdateInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    missionCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type UserRegionMissionCountCreateManyInput = {
    userId: bigint | number
    regionId: bigint | number
    missionCount?: bigint | number | null
  }

  export type UserRegionMissionCountUpdateManyMutationInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    missionCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type UserRegionMissionCountUncheckedUpdateManyInput = {
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    regionId?: BigIntFieldUpdateOperationsInput | bigint | number
    missionCount?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FoodCategoryOrderByRelevanceInput = {
    fields: FoodCategoryOrderByRelevanceFieldEnum | FoodCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FoodCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FoodCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FoodCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FoodCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FoodCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumInquiryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[]
    notIn?: $Enums.InquiryStatus[]
    not?: NestedEnumInquiryStatusFilter<$PrismaModel> | $Enums.InquiryStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InquiryOrderByRelevanceInput = {
    fields: InquiryOrderByRelevanceFieldEnum | InquiryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InquiryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InquiryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type InquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InquiryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InquirySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumInquiryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[]
    notIn?: $Enums.InquiryStatus[]
    not?: NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InquiryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInquiryStatusFilter<$PrismaModel>
    _max?: NestedEnumInquiryStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type InquiryImageOrderByRelevanceInput = {
    fields: InquiryImageOrderByRelevanceFieldEnum | InquiryImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InquiryImageCountOrderByAggregateInput = {
    id?: SortOrder
    inquiryId?: SortOrder
    imageUrl?: SortOrder
    imageOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type InquiryImageAvgOrderByAggregateInput = {
    id?: SortOrder
    inquiryId?: SortOrder
    imageOrder?: SortOrder
  }

  export type InquiryImageMaxOrderByAggregateInput = {
    id?: SortOrder
    inquiryId?: SortOrder
    imageUrl?: SortOrder
    imageOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type InquiryImageMinOrderByAggregateInput = {
    id?: SortOrder
    inquiryId?: SortOrder
    imageUrl?: SortOrder
    imageOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type InquiryImageSumOrderByAggregateInput = {
    id?: SortOrder
    inquiryId?: SortOrder
    imageOrder?: SortOrder
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type MissionOrderByRelevanceInput = {
    fields: MissionOrderByRelevanceFieldEnum | MissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MissionCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    content?: SortOrder
    rewardPoint?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionAvgOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    rewardPoint?: SortOrder
    deadline?: SortOrder
  }

  export type MissionMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    content?: SortOrder
    rewardPoint?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    content?: SortOrder
    rewardPoint?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MissionSumOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    rewardPoint?: SortOrder
    deadline?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
    missionId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
    missionId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
    missionId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
    missionId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
    missionId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PointHistoryOrderByRelevanceInput = {
    fields: PointHistoryOrderByRelevanceFieldEnum | PointHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PointHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    point?: SortOrder
    storeName?: SortOrder
    missionContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PointHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    point?: SortOrder
  }

  export type PointHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    point?: SortOrder
    storeName?: SortOrder
    missionContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PointHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    point?: SortOrder
    storeName?: SortOrder
    missionContent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PointHistorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    point?: SortOrder
  }

  export type RegionOrderByRelevanceInput = {
    fields: RegionOrderByRelevanceFieldEnum | RegionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ReviewCommentOrderByRelevanceInput = {
    fields: ReviewCommentOrderByRelevanceFieldEnum | ReviewCommentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCommentCountOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewCommentAvgOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewCommentMinOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewCommentSumOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewImageOrderByRelevanceInput = {
    fields: ReviewImageOrderByRelevanceFieldEnum | ReviewImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewImageCountOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    imageUrl?: SortOrder
    imageOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewImageAvgOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    imageOrder?: SortOrder
  }

  export type ReviewImageMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    imageUrl?: SortOrder
    imageOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewImageMinOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    imageUrl?: SortOrder
    imageOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewImageSumOrderByAggregateInput = {
    id?: SortOrder
    reviewId?: SortOrder
    imageOrder?: SortOrder
  }

  export type StoreOrderByRelevanceInput = {
    fields: StoreOrderByRelevanceFieldEnum | StoreOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    foodCategoryId?: SortOrder
    regionId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    businessStartHours?: SortOrder
    businessEndHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    id?: SortOrder
    foodCategoryId?: SortOrder
    regionId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    foodCategoryId?: SortOrder
    regionId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    businessStartHours?: SortOrder
    businessEndHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    foodCategoryId?: SortOrder
    regionId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    businessStartHours?: SortOrder
    businessEndHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    id?: SortOrder
    foodCategoryId?: SortOrder
    regionId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StoreImageOrderByRelevanceInput = {
    fields: StoreImageOrderByRelevanceFieldEnum | StoreImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StoreImageCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    imageUrl?: SortOrder
    imageOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type StoreImageAvgOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    imageOrder?: SortOrder
  }

  export type StoreImageMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    imageUrl?: SortOrder
    imageOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type StoreImageMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    imageUrl?: SortOrder
    imageOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type StoreImageSumOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    imageOrder?: SortOrder
  }

  export type EnumUserGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.UserGender | EnumUserGenderFieldRefInput<$PrismaModel>
    in?: $Enums.UserGender[]
    notIn?: $Enums.UserGender[]
    not?: NestedEnumUserGenderFilter<$PrismaModel> | $Enums.UserGender
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    regionId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    point?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    eventNotificationEnabled?: SortOrder
    reviewReplyNotificationEnabled?: SortOrder
    inquiryReplyNotificationEnabled?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    point?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    regionId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    point?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    eventNotificationEnabled?: SortOrder
    reviewReplyNotificationEnabled?: SortOrder
    inquiryReplyNotificationEnabled?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    regionId?: SortOrder
    address?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    point?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    eventNotificationEnabled?: SortOrder
    reviewReplyNotificationEnabled?: SortOrder
    inquiryReplyNotificationEnabled?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    point?: SortOrder
  }

  export type EnumUserGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserGender | EnumUserGenderFieldRefInput<$PrismaModel>
    in?: $Enums.UserGender[]
    notIn?: $Enums.UserGender[]
    not?: NestedEnumUserGenderWithAggregatesFilter<$PrismaModel> | $Enums.UserGender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserGenderFilter<$PrismaModel>
    _max?: NestedEnumUserGenderFilter<$PrismaModel>
  }

  export type UserFoodCategoryFoodCategoryIdUserIdCompoundUniqueInput = {
    foodCategoryId: bigint | number
    userId: bigint | number
  }

  export type UserFoodCategoryCountOrderByAggregateInput = {
    foodCategoryId?: SortOrder
    userId?: SortOrder
  }

  export type UserFoodCategoryAvgOrderByAggregateInput = {
    foodCategoryId?: SortOrder
    userId?: SortOrder
  }

  export type UserFoodCategoryMaxOrderByAggregateInput = {
    foodCategoryId?: SortOrder
    userId?: SortOrder
  }

  export type UserFoodCategoryMinOrderByAggregateInput = {
    foodCategoryId?: SortOrder
    userId?: SortOrder
  }

  export type UserFoodCategorySumOrderByAggregateInput = {
    foodCategoryId?: SortOrder
    userId?: SortOrder
  }

  export type EnumUserMissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserMissionStatus | EnumUserMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserMissionStatus[]
    notIn?: $Enums.UserMissionStatus[]
    not?: NestedEnumUserMissionStatusFilter<$PrismaModel> | $Enums.UserMissionStatus
  }

  export type UserMissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMissionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
  }

  export type UserMissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMissionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    missionId?: SortOrder
  }

  export type EnumUserMissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserMissionStatus | EnumUserMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserMissionStatus[]
    notIn?: $Enums.UserMissionStatus[]
    not?: NestedEnumUserMissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserMissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserMissionStatusFilter<$PrismaModel>
    _max?: NestedEnumUserMissionStatusFilter<$PrismaModel>
  }

  export type UserRegionMissionCountUserIdRegionIdCompoundUniqueInput = {
    userId: bigint | number
    regionId: bigint | number
  }

  export type UserRegionMissionCountCountOrderByAggregateInput = {
    userId?: SortOrder
    regionId?: SortOrder
    missionCount?: SortOrder
  }

  export type UserRegionMissionCountAvgOrderByAggregateInput = {
    userId?: SortOrder
    regionId?: SortOrder
    missionCount?: SortOrder
  }

  export type UserRegionMissionCountMaxOrderByAggregateInput = {
    userId?: SortOrder
    regionId?: SortOrder
    missionCount?: SortOrder
  }

  export type UserRegionMissionCountMinOrderByAggregateInput = {
    userId?: SortOrder
    regionId?: SortOrder
    missionCount?: SortOrder
  }

  export type UserRegionMissionCountSumOrderByAggregateInput = {
    userId?: SortOrder
    regionId?: SortOrder
    missionCount?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumInquiryStatusFieldUpdateOperationsInput = {
    set?: $Enums.InquiryStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumUserGenderFieldUpdateOperationsInput = {
    set?: $Enums.UserGender
  }

  export type EnumUserMissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserMissionStatus
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumInquiryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[]
    notIn?: $Enums.InquiryStatus[]
    not?: NestedEnumInquiryStatusFilter<$PrismaModel> | $Enums.InquiryStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InquiryStatus | EnumInquiryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InquiryStatus[]
    notIn?: $Enums.InquiryStatus[]
    not?: NestedEnumInquiryStatusWithAggregatesFilter<$PrismaModel> | $Enums.InquiryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInquiryStatusFilter<$PrismaModel>
    _max?: NestedEnumInquiryStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumUserGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.UserGender | EnumUserGenderFieldRefInput<$PrismaModel>
    in?: $Enums.UserGender[]
    notIn?: $Enums.UserGender[]
    not?: NestedEnumUserGenderFilter<$PrismaModel> | $Enums.UserGender
  }

  export type NestedEnumUserGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserGender | EnumUserGenderFieldRefInput<$PrismaModel>
    in?: $Enums.UserGender[]
    notIn?: $Enums.UserGender[]
    not?: NestedEnumUserGenderWithAggregatesFilter<$PrismaModel> | $Enums.UserGender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserGenderFilter<$PrismaModel>
    _max?: NestedEnumUserGenderFilter<$PrismaModel>
  }

  export type NestedEnumUserMissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserMissionStatus | EnumUserMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserMissionStatus[]
    notIn?: $Enums.UserMissionStatus[]
    not?: NestedEnumUserMissionStatusFilter<$PrismaModel> | $Enums.UserMissionStatus
  }

  export type NestedEnumUserMissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserMissionStatus | EnumUserMissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserMissionStatus[]
    notIn?: $Enums.UserMissionStatus[]
    not?: NestedEnumUserMissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserMissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserMissionStatusFilter<$PrismaModel>
    _max?: NestedEnumUserMissionStatusFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}