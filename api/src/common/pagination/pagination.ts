import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Type } from '@nestjs/common'
import { PageInfo } from './page-info.model'

export default function Paginated<TItem>(
  TItemClass: Type<TItem>,
): any {
  @ObjectType(`${TItemClass.name}Edge`)
  abstract class EdgeType {
    @Field(() => String)
    cursor: string

    @Field(() => TItemClass)
    node: TItem
  }

  @ObjectType({ isAbstract: true })
  abstract class PaginatedType {
    @Field(() => [EdgeType], { nullable: true })
    edges: Array<EdgeType>

    @Field(() => PageInfo)
    pageInfo: PageInfo

    @Field(() => Int)
    totalCount: number
  }
  return PaginatedType
}
