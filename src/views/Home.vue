<template>
  <div>
    <my-panel></my-panel>
    <div class="layuiui-container">
      <div class="layui-row layui-col-space15">
        <div class="layui-col-md8">
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
import Panel from '@/components/Panel'
import Tips from '@/components/sidebar/Tips'
import Sign from '@/components/sidebar/Sign'
import Ads from '@/components/sidebar/Ads'
import HotList from '@/components/sidebar/HotList'
import Links from '@/components/sidebar/Links'
import List from '@/components/contents/List'
export default {
  name: 'home',
  components: {
    'my-panel': Panel,
    'my-tips': Tips,
    'my-sign': Sign,
    'my-ads': Ads,
    'my-hotlist': HotList,
    'my-links': Links,
    'my-list': List
  }
}
</script>

<style lang="scss" scoped>
</style>
