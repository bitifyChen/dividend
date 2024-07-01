<template>
  <div
    class="container mx-auto flex h-[100vh] min-h-[568px] w-[300px] items-center px-[15px] pb-[100px] pt-[35px] sm:px-[25px] md:w-[90%] 2xl:w-[1300px]"
  >
    <div class="flex w-full flex-col md:flex-row">
      <!-- <img
        class="xl:max-w-[60%] xl:max-w-[50%] md:w-[50%] w-[300px]"
        src="/img/maintenance.png"
        alt=""
      /> -->
      <article class="flex-1 pt-[30px] md:pl-[40px]">
        <hr class="mb-[30px] mt-[20px] border-[#ccc]" />
        <p class="text-[18px] leading-[1.5] xl:text-[20px]">
          <router-link to="/" class="text-[#1599F2]"> error </router-link>
        </p>
      </article>
    </div>
  </div>
</template>

<route>
  {
    name: "EmptyPage",
    meta: {
      requiresAuth: false,
      layout: "empty"
    }
  }
</route>
