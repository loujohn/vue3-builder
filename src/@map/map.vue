<template>
  <div id="cesiumContainer" class="bg-no-repeat bg-cover" style=" background-color: #023591;background-image: url('src/assets/bjmengceng.png');"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import mars3d from 'mars3d';

export default defineComponent({
  name: 'CesiumMap',
  setup() {
    onMounted(() => {
      var imageryProvider = mars3d.layer.createImageryProvider({
        type: 'www_tdt',
        layer: 'img_d'
      });
      const options = {
        id: 'cesiumContainer',
        animation: false, // 是否创建动画小器件，左下角仪表
        timeline: false, // 是否显示时间线控件
        geocoder: false, // 是否显示地名查找控件

        sceneModePicker: false, // 是否显示投影方式控件
        homeButton: false, // 回到默认视域按钮
        baseLayerPicker: false, // 是否显示图层选择控件
        // location: {
        //   show: true,
        // },
        imageryProvider: imageryProvider,
        navigationHelpButton: false,
        fullscreenButton: false,
        orderIndependentTranslucency: false,
        infoBox: false,
        contextOptions: {
          webgl: {
            alpha: true
          }
        }
      };
      const viewer = mars3d.createMap({
        ...options
      });
      return viewer;
    });
  }
});
</script>
<style lang="scss">
#cesiumContainer {
  position: fixed;
  top: 49px;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
