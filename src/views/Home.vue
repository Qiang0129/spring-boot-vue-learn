<template>
  <div>
    <div>1. el-input输入框的使用</div>
    <div>
      <el-input v-model="data.input1" style="width: 240px; margin-top: auto;" placeholder="请输入内容" :prefix-icon="Search" />
      <div>{{ data.input1 }}</div>
      <el-input v-model="data.input2" type="textarea" style="width: 240px; margin-top: auto;" placeholder="请输入内容" :suffix-icon="Calendar" />
      <div>{{ data.input2 }}</div>
    </div>

    <!-- 单选下拉框的使用 el-select el-option -->
    <div style="margin-top: 20px;">
      <el-select size="small" v-model="data.value" placeholder="单选" style="width: 500px" clearable>
        <el-option style="font-size: 14px;"
        v-for="item in data.options"
        :key="item.value" 
        :label="item.label"
        :value="item.value"
        /> 
      </el-select>
    </div>

    <!-- 多选下拉框的使用 el-select el-option -->
    <div style="margin-top: 20px;">
      <el-select
        v-model="data.value"
        multiple
        placeholder="多选"
        style="width: 240px"
        clearable
        size="large"
        vaule-key="id"
      >
        <el-option
          v-for="item in data.options"
          :key="item.id"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <!-- 单选框和组合按钮单选框的使用 -->
    <div style="margin-top: 20px;">
      <el-radio-group v-model="data.danxuan">
      <el-radio value="男">男</el-radio>
      <el-radio value="女">女</el-radio>
      </el-radio-group>
    </div>

    <div style="margin-top: 20px;">
      <el-radio-group v-model="data.zuhe" size="large" fill="#6cf">
      <el-radio-button label="首页" value="1" />
      <el-radio-button label="我的点赞" value="2" />
      <el-radio-button label="我的收藏" value="3" />
      <el-radio-button label="我的转发" value="4" />
    </el-radio-group>
    </div>
    
    <!-- 使用el-image -->
    <div style="margin-top: 20px;">
      <img src="@/assets/logo.svg" alt="" style="width: 100px;" ></img>
      <el-image :src="img" style="width: 100px; margin-left: 100px;" />
      <el-image :src="data.url" style="width: auto; margin-left: 100px;" />
    </div>

  </div>
</template>

<script setup>
import { Search, Calendar } from '@element-plus/icons-vue';
import { reactive ,ref} from 'vue';
import img from '@/assets/logo.svg';

const data = reactive({
  input1: null,
  input2: null,
  options: [
    { id: 1, value: '选项1', label: '黄金糕' }, // 这里的id就是key,他是唯一的，label是显示的文本,label是可以重复的
    { id: 2, value: '选项2', label: '双皮奶' },
    { id: 3, value: '选项3', label: '蚵仔煎' },
    { id: 4, value: '选项4', label: '龙须面' },
    { id: 1, value: '选项5', label: '北京烤鸭' },
  ],
  danxuan:'男',
  zuhe:'2',
  url:"https://tse1.mm.bing.net/th/id/OIP.9mejh0Nv5GX6TpWMIEwxDwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
});

</script>