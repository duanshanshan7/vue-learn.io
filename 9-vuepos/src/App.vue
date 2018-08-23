<template>
    <div id="app">
        <!-- <router-view></router-view> -->
        <leftNav></leftNav>
        <order></order>
    </div>
</template>

<script>
import leftNav from "@/components/common/leftNav";
import order from "@/components/page/order";
export default {
    name:'App',
    components:{
        leftNav,
        order
    }
}
</script>

