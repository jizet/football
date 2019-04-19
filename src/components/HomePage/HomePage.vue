<template>
  <div>
    <div v-if="shareData.filter.value">
      <el-tag :key="shareData.filter.type" closable @close="handleClose()">{{shareData.filter.value.name}}</el-tag>
    </div>
    <br>
    <div class="grid-display">
      <el-card style="margin-bottom: 10px;" v-for="game in matches" :key="game.id">
        <div slot="header" class="clearfix">
          <span>{{game.homeTeam.name}} vs {{game.awayTeam.name}}</span>
        </div>
        <div>{{ new Date(game.utcDate) }}</div>
      </el-card>
    </div>
  </div>
</template>

<script src="./HomePage.js"></script>
<style src="./HomePage.css"></style>
