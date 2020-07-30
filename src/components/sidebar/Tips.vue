<template>
  <div class="fly-panel">
    <h3 class="fly-panel-title">温馨通道</h3>
    <div class="fly-panel-main layui-row">
      <ul class="layui-clear imooc-quick">
        <li class="layui-col-xs6">
          <a href target="_blank">test</a>
        </li>
        <li class="layui-col-xs6">
          <a href target="_blank">test</a>
        </li>
        <li class="layui-col-xs6">
          <a href target="_blank">test</a>
        </li>
        <li class="layui-col-xs6">
          <a href target="_blank">test</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tips'
}
</script>

<style lang="scss" scoped>
$border-color: #f2f2f2;
.fly-panel-main {
  padding: 15px;
}
.imooc-quick {
  border: 1px solid $border-color;
  border-bottom: none;
  border-right: none;
  .layui-col-xs6 {
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    border: 1px solid $border-color;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis; //文字超出显示范围时显示成省略号
    overflow: hidden;
    border-top: none; //现在边框看起来会有点粗 因为两条重叠了
    border-left: none;
    a {
      display: block; //设置点击范围为整个a标签
    }
  }
}
</style>
