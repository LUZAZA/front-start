<template>
  <div
    class="fly-panel"
    style="margin-bottom: 0;"
  >
    <div class="fly-panel-title fly-filter">
      <a
        :class="{ 'layui-this': status === '' && tag === '' }"
        @click.prevent="search()"
      >综合</a>
      <span class="fly-mid"></span>
      <a
        :class="{ 'layui-this': status === '0' }"
        @click.prevent="search(0)"
      >未结</a>
      <span class="fly-mid"></span>
      <a
        :class="{ 'layui-this': status === '1' }"
        @click.prevent="search(1)"
      >已结</a>
      <span class="fly-mid"></span>
      <a
        :class="{ 'layui-this': status === '' && tag === '精华' }"
        @click.prevent="search(2)"
      >精华</a>
      <span class="fly-filter-right layui-hide-xs">
        <a
          :class="{ 'layui-this': sort === 'created' }"
          @click.prevent="search(3)"
        >按最新</a>
        <span class="fly-mid"></span>
        <a
          :class="{ 'layui-this': sort === 'answer' }"
          @click.prevent="search(4)"
        >按热议</a>
      </span>
    </div>
    <my-listitem
      :lists="lists"
      @nextpage="nextpage()"
    ></my-listitem>
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
      isRecive: true,
      isEnd: false,
      status: '',
      tag: '',
      sort: 'answer',
      page: 0,
      limit: 20,
      catalog: "",
      lists: [],
      current: ''
    }
  },
  watch: {
    current (newVal, oldVal) {
      this.resetParams()
    },
    $route () {
      let catalog = this.$route.params['catalog']
      if (typeof catalog !== "undefined" && catalog !== '') {
        this.catalog = catalog
      }
      this.resetParams()
    }
  },
  mounted () {
    let catalog = this.$route.params['catalog']
    if (typeof catalog !== "undefined" && catalog !== '') {
      this.catalog = catalog
    }
    this.resetParams()
  },
  methods: {
    resetParams () {
      this.page = 0
      this.list = []
      this.isEnd = false
      this._getLists()
    },
    search (val) {
      if (typeof val === 'undefined' && this.current === '') {
        return
      }
      this.current = val
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
          this.current = ''
          this.tag = ''
        }
      }
    },
    nextpage () {
      this.page++
      this._getLists()
    },
    _getLists () {
      // if (!this.isRecive) return
      if (this.isEnd) {
        return
      }
      this.isRecive = false
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
        // 防止用户网络状态不好的时候疯狂点击加载
        this.isRecive = true
        if (res.code === 200) {
          if (res.data.length < this.limit) {
            this.isEnd = true
          }
          if (this.lists.length === 0) {
            this.lists = res.data
          } else {
            this.lists = this.lists.concat(res.data)
          }
        }
      }).catch((err) => {
        this.isRecive = true
        this.$alert(err.message)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
