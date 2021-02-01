<template>
  <div class="wrapper">
    <div class="infobox">
      <img src="../../assets/imgs/warning3.png" alt="">
      <span>您有5条消息</span>
    </div>
  </div>
  
</template>

<script>
  export default {
    data(){
      return {
       
      }
    },
    methods: {
      test(){
        function dragFunc(id) {
          var Drag = document.getElementById(id);
          Drag.onmousedown = function(event) {
              var ev = event || window.event;
              event.stopPropagation();
              var disX = ev.clientX - Drag.offsetLeft;
              var disY = ev.clientY - Drag.offsetTop;
              document.onmousemove = function(event) {
                  var ev = event || window.event;
                  Drag.style.left = ev.clientX - disX + "px";
                  Drag.style.top = ev.clientY - disY + "px";
                  Drag.style.cursor = "move";
              };
          };
          Drag.onmouseup = function() {
              document.onmousemove = null;
              this.style.cursor = "default";
          };
        };
        dragFunc("idOuterDiv");
      }
    }
  }


</script>

<style lang="less" scoped>
.wrapper{
  .infobox{
    cursor: pointer;
    img {
      margin-left: 8px;
    }
    span {
      display: block;
      color: brown;
    }
  }
  
}
</style>