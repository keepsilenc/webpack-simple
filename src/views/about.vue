<template>
    <div class="about">
        这是{{page}}页面
        <div class="nihao">
            <p>什么</p>
        </div>
    </div>
</template>
<script>
    require('./about.less')
    //import'./about.less';
    module.exports = {
        data: function () {
            return {
                page: 'about'
            }
        }
    }
</script>

