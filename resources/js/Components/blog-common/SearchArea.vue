<script setup>

</script>

<template>
  <div className="sidebar__widget mb-30">
    <div className="sidebar__widget-content">
      <h3 className="sidebar__widget-title">Search Here</h3>
      <div className="sidebar__search">
        <form @submit.prevent>
          <div className="sidebar__search-input-2">
            <input type="text" placeholder="Search" />
            <button type="submit"><i className="far fa-search"></i></button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

