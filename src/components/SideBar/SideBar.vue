<template>
   <div>
    <el-menu>
        <el-menu-item-group >
          <template slot="title">Clubs</template>
          <el-menu-item v-for="club in clubs" v-bind:key="club.id" :index="'1-'+club.id" @click="clubSelected(club)">
            {{club.name}}
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">Competitions</template>
          <el-menu-item v-for="comp in competitions" v-bind:key="comp.id" :index="'2-'+comp.id" @click="competitionSelected(comp)">
            {{comp.name}}
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </div>
</template>

<script src="./SideBar.js"></script>
<style src="./SideBar.css"></style>