<template>
  <div class="pagination">
    <ul v-if="pages > 1">
      <li class="pagination-previous"
          :class="currentPage === 1 ? 'pagination-disabled': ''"
          @click.stop="changePagesPN(-1)">
        Previous
      </li>
      <!-- current 小于6 -->
      <template v-if="currentPage < 6">
        <li class="pagination-num"
            v-for="index in 6"
            :key="index"
            :class="index === currentPage ? 'active' : ''"
            @click.stop="changePages(index)"
        >
          {{index}}
        </li>
        <li class="pagination-num">...</li>
        <li class="pagination-num" @click.stop="changePages(pages)">{{pages}}</li>
      </template>

      <!-- current 大于等于6， 6+6小于pages -->
      <template v-else-if="currentPage >=6 && currentPage + 5 <= pages">
        <li class="pagination-num" @click.stop="changePages(1)">1</li>
        <li class="pagination-num">...</li>
        <li class="pagination-num" @click.stop="changePages(currentPage - 2)">{{currentPage - 2}}</li>
        <li class="pagination-num" @click.stop="changePages(currentPage - 1)">{{currentPage - 1}}</li>
        <li class="pagination-num active" @click.stop="changePages(currentPage)">{{currentPage}}</li>
        <li class="pagination-num" @click.stop="changePages(currentPage + 1)">{{currentPage + 1}}</li>
        <li class="pagination-num" @click.stop="changePages(currentPage + 2)">{{currentPage + 2}}</li>
        <li class="pagination-num">...</li>
        <li class="pagination-num" @click.stop="changePages(pages)">{{pages}}</li>
      </template>

      <!-- current 大于6， 6+6大于等于pages -->
      <template v-else>
        <li class="pagination-num"  @click.stop="changePages(1)">1</li>
        <li class="pagination-num">...</li>
        <li class="pagination-num"
            v-for="index in [pages - 5, pages - 4, pages - 3, pages - 2, pages - 1, pages]"
            :key="index"
            :class="index === currentPage ? 'active' : ''"
            @click.stop="changePages(index)"
        >
          {{index}}
        </li>
      </template>

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
