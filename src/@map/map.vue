<template>
  <div id="map" class="w-full h-full"></div>
</template>
<script lang="ts">
import Map2D from 'Map2D';
import { onMounted } from 'vue';
import cheUrl from '/@/assets/map/maker/che.png';

let map;
export default {
  name: '',
  setup() {
    onMounted(() => {
      map = new Map2D.map({
        container: 'map', // container id
        style: './data/baseStyle.json', // style URL
        center: [107.55298787626248, 30.199938822039385],
        zoom: 7.067351578907687
      });
      // if (!map.hasImage('che-icon')) {
      let cheImg = new Image();
      cheImg.src = cheUrl;
      cheImg.width = 40;
      cheImg.height = 40;
      cheImg.style.width = '40px';
      cheImg.style.height = '40px';

      console.log(cheImg);
      map.addImage('che-icon', cheImg);

      // }
      map.on('load', () => {
        let point = {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: [107.55298787626248, 30.199938822039385]
              }
            }
          ]
        };
        map.addSource('point', {
          type: 'geojson',
          data: point
        });
        map.addLayer({
          id: 'point',
          source: 'point',
          type: 'symbol',
          layout: {
            'icon-image': 'che-icon',
            'icon-rotate': ['get', 'bearing'],
            'icon-rotation-alignment': 'map',
            'icon-allow-overlap': true,
            'icon-ignore-placement': true
          }
        });
      });
    });
  }
};
</script>
<style lang="scss"></style>
