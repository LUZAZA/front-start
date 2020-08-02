<template>
  <div>
    <div class="layuiui-container">
      <div class="layui-row layui-col-space15">
        <div class="layui-col-md8">
          <my-top></my-top>
          <my-list></my-list>
        </div>
        <div class="layui-col-md4">
          <my-tips></my-tips>
          <my-sign></my-sign>
          <my-hotlist></my-hotlist>
          <my-ads></my-ads>
          <my-links></my-links>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tips from '@/components/sidebar/Tips'
import Sign from '@/components/sidebar/Sign'
import Ads from '@/components/sidebar/Ads'
import HotList from '@/components/sidebar/HotList'
import Links from '@/components/sidebar/Links'
import List from '@/components/contents/List'
import Top from '@/components/contents/Top'
export default {
  name: 'index',
  components: {
    'my-tips': Tips,
    'my-sign': Sign,
    'my-ads': Ads,
    'my-hotlist': HotList,
    'my-links': Links,
    'my-list': List,
    'my-top': Top
  }
}
</script>

<style lang="scss" scoped>
</style>
