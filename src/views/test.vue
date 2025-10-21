
<template>
  <main>
    <div style="background-color: red;  text-align: center; margin-bottom: 20px;">
      学习vue3
    </div>
    <div style="color: black; margin-bottom: 20px;font-size: 20px;">
      {{ a }}
    </div>
    <div style="color: blue; margin-bottom: 20px;font-size: 20px;">
      {{ objection.name }} --- {{ objection.age }}岁({{ objection.mssg }})
    </div>
     <!-- /* 输入框v-model双向绑定 */ -->
    <div style="background-color: green; padding: 10px; margin-bottom: 20px;">
      <input v-model="objection.age" /> 
    </div>
    <div style = "margin-bottom: 20px;">
      <input v-model="objection.name" style="background-color: antiquewhite;" />
      <span style="color: aquamarine;" v-if="objection.name === '肖强'">   回答正确</span>
      <span style="color: red;" v-else>   回答错误</span>
    </div>
<!-- 下拉框的编写（利用循环） -->
    <div style="display: flex; margin-bottom: 20px; ">
      <div @click="show(item)" style="width: 100px; height: 100px; background-color: lightblue; text-align: center; color: black; margin-right: 15px; line-height: 100px; font-size: 25px;" v-for='item in objection.num'>{{ item }}</div>
      <div> <select style="width: 50px;" >
        <option v-for='item in objection.num'>{{ item }}</option>
      </select></div>
    </div>

    <div style="margin-bottom: 20px;">
      <button @click="click">点击事件</button>
    </div>
<!-- 事件绑定 -->
    <div :style="objection.yangshi" ></div>
    <div>
      <img :src="objection.img" alt="">
    </div>
    
<!-- 测试element-plus是否导入成功 -->
    <div style="margin-bottom: 20px;">
      <el-button @click="onClick " :style="{color: 'red'}">element-plus默认按钮</el-button>  <!-- //:style=绑定了一个对象，他是描述文本颜色的 -->
      <el-button type="primary" :style="{color: 'red'}">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>

<!-- 测试icon是否导入成功 -->
    <span style="color: #909399 ;">
      <el-icon :size="20" style="top: 4px;"><View /></el-icon>100 <!-- 这里的top表示该按钮上方增加4px的空白 -->
       <el-button type="danger" :icon="Delete" circle />
    </span>

   
  </main>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { Delete } from '@element-plus/icons-vue'



const a = ref('这是一个vue变量的使用，利用的是ref定义的变量')
const objection = reactive({
  name: '张三',
  age: 18,
  mssg: "这是用的reactive定义的对象里面的属性",
  num: [1,2,3,4,5],
  yangshi:{
    width: '100px',
    height: '100px',
    backgroundColor: 'red',
    marginDown: '20px'
  },
  img:'https://www.runoob.com/wp-content/uploads/2017/01/vue.png'
})
const click = () => {
  alert('点击事件')
}

onMounted(() => {
  alert('页面加载完成，这是onMounted生命周期函数')
})

const show = (item) => {
  alert(item)
}
const onClick = () => {
  alert('你点击了element-plus默认样式的按钮')
}
</script>
