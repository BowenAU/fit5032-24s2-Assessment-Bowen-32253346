<!-- <template>
    <div class="container">
      <header class="d-flex justify-content-center">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link to="/">
              <div class="badge text-bg-primary text-wrap" style="width: 6rem">Home</div>
            </router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link to="/login">
              <div class="badge text-bg-primary text-wrap" style="width: 6rem">Log in</div>
            </router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link to="/signup">
              <div class="badge text-bg-primary text-wrap" style="width: 6rem">Sign Up</div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/service">
              <div class="badge text-bg-primary text-wrap">Our Services</div>
            </router-link>   
          </li>
          <li class="nav-item">
            <router-link to="/admin">
              <div class="badge text-bg-primary text-wrap">Admin Panel View Page</div>
            </router-link>   
          </li>
          <li class="nav-item">
            <router-link to="/review">
              <div class="badge text-bg-primary text-wrap" style="width: 6rem">Review</div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/inform">
              <div class="badge text-bg-primary text-wrap">Inform</div>
            </router-link>   
          </li>
          <li class="nav-item">
            <router-link to="/about">
              <div class="badge text-bg-primary text-wrap">About us</div>
            </router-link>   
          </li>
          <li class="nav-item">
            <router-link to="/findus">
              <div class="badge text-bg-primary text-wrap">Find us</div>
            </router-link>   
          </li>
        </ul>
      </header>
  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isAuthenticated: false, // Make sure to manage this state accordingly
      };
    },
  };
  </script>
   -->

   <template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">MigrantCare</b-navbar-brand>
  
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item v-if="!isAuthenticated" to="/login">Log in</b-nav-item>
            <b-nav-item v-if="!isAuthenticated" to="/signup">Sign Up</b-nav-item>
            <b-nav-item to="/service">Our Services</b-nav-item>
            <b-nav-item to="/admin">Admin Panel View Page</b-nav-item>
            <b-nav-item to="/review">Review</b-nav-item>
            <b-nav-item to="/inform">Inform</b-nav-item>
            <b-nav-item to="/about">About us</b-nav-item>
            <b-nav-item to="/findus">Find us</b-nav-item>
          </b-navbar-nav>
  
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
  
            <b-nav-item-dropdown text="Language" right>
              <b-dropdown-item href="#">English</b-dropdown-item>
              <b-dropdown-item href="#">Chinese</b-dropdown-item>
            </b-nav-item-dropdown>
  
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isAuthenticated: false, 
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add spacing between nav items */
  .b-nav-item {
    margin-right: 50px; /* Adjust this value to control the spacing */
  }
  
  /* Adjust navbar background color and other styles */
  .b-navbar {
    background-color: blue; /* You can change this to customize your navbar color */
  }
  </style>
  