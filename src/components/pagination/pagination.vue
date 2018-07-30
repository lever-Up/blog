<template>
  <div class="pagination">
    <ul v-if="pages > 1">
      <li class="pagination-previous"
          :class="currentPage === 1 ? 'pagination-disabled': ''"
          @click.stop="changePagesPN(-1)">
        Previous
      </li>
      <li class="pagination-num"
          v-for="index in pages"
          :key="index"
          :class="index === currentPage ? 'active' : ''"
          @click.stop="changePages(index)"
          v-if="pages < 11"
      >
        {{index}}
      </li>
      <li class="pagination-next"
          :class="currentPage === total ? 'pagination-disabled': ''"
          @click.stop="changePagesPN(1)">
        Next
      </li>
    </ul>
  </div>
</template>
<script src="./pagination.js"/>
<style lang="sass">
  @import "./pagination.scss"
</style>
