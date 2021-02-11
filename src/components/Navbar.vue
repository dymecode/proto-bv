<template functional>
  <b-navbar toggleable="md" type="light">
    <b-navbar-nav>
      <b-nav-item href="#" class="px-1">
        <fa-icon icon="bars" size="lg" class="mr-1"></fa-icon>
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-brand href="#">NavBar</b-navbar-brand>


    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" class="px-1">
          <fa-icon icon="question-circle" size="lg" class="mr-1"></fa-icon>
        </b-nav-item>

        <b-nav-item-dropdown right class="px-1">
          <template #button-content>
            <fa-icon icon="language" size="lg" class="mr-1"></fa-icon>
            <fa-icon icon="angle-down" size="sm"></fa-icon>
          </template>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right class="px-1">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <fa-icon icon="user-circle" size="lg" class="mr-1"></fa-icon>
            <fa-icon icon="angle-down" size="sm"></fa-icon>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
