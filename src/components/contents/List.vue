<template>
  <div class="fly-panel" style="margin-bottom: 0;">
    <div class="fly-panel-title fly-filter">
      <a :class="{ 'layui-this': status === '' && tag === '' }" @click.prevent="search()">综合</a>
      <span class="fly-mid"></span>
      <a :class="{ 'layui-this': status === '0' }" @click.prevent="search(0)">未结</a>
      <span class="fly-mid"></span>
      <a :class="{ 'layui-this': status === '1' }" @click.prevent="search(1)">已结</a>
      <span class="fly-mid"></span>
      <a :class="{ 'layui-this': status === '' && tag === '精华' }" @click.prevent="search(2)">精华</a>
      <span class="fly-filter-right layui-hide-xs">
        <a :class="{ 'layui-this': sort === 'created' }" @click.prevent="search(3)">按最新</a>
        <span class="fly-mid"></span>
        <a :class="{ 'layui-this': sort === 'answer' }" @click.prevent="search(4)">按热议</a>
      </span>
    </div>
    <my-listitem :lists="lists" @nextpage="nextpage()"></my-listitem>
  </div>
</template>

<script>
import ListItem from './ListItem'
import { getList } from '@/api/contents'
export default {
  name: 'list',
  components: {
    'my-listitem': ListItem
  },
  data () {
    return {
      status: '',
      tag: '',
      sort: 'answer',
      page: 0,
      limit: 20,
      catalog: "",
      lists: [
        {
          uid: {
            name: "imooc",
            isVip: 1
          },
          title: "大前端课程",
          content: "",
          created: "2019-10-01 01:00:00",
          catalog: 'ask',
          fav: 40,
          isEnd: 0,
          read: 10,
          answer: 0,
          status: 0,
          isTop: 0,
          tags: [
            {
              name: "精华",
              class: "layui-bg-red"
            },
            {
              name: "热门",
              class: "layui-bg-blue"
            }
          ]

        }
      ]
    }
  },
  mounted () {
    this._getLists()
  },
  methods: {
    search (val) {
      switch (val) {
        case 0: {
          this.status = '0'
          this.tag = ''
          break
        }
        case 1: {
          this.status = '1'
          this.tag = ''
          break
        }
        case 2: {
          this.status = ''
          this.tag = '精华'
          break
        }
        case 3: {
          this.sort = 'created'
          break
        }
        case 4: {
          this.sort = 'answer'
          break
        }
        default: {
          this.status = ''
          this.tag = ''
        }
      }
    },
    nextpage () {
      this.page++
      this._getLists()
    },
    _getLists () {
      let options = {
        status: this.status,
        tag: this.tag,
        sort: this.sort,
        page: this.page,
        limit: this.limit,
        catalog: this.catalog,
        isTop: 0
      }
      getList(options).then((res) => {
        if (res.code === 200) {
          if (this.lists.length === 0) {
            this.lis = res.data
          } else {
            this.lists = this.lists.concat(res.data)
          }
        }
      }).catch((err) => {
        this.$alert(err.msg)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
