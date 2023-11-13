<template>
    <div>
        <div class="header">
            <el-button type="text" @click="goBack">
                <el-icon><ArrowLeft /></el-icon>
            </el-button>
            <h3 class="title">
                添加套餐
            </h3>
        </div>

        <div v-if="this.$store.state.user.usertype==2">
            <div>
    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
    </v-form-render>
    <el-button type="primary" @click="submitForm">Submit</el-button>
  </div>
        </div>
      
    
   

       
    </div>
</template>



<script setup>
import axios from '@/axios'
import router from '@/router'
import { ref, reactive } from 'vue'
  import { ElMessage } from 'element-plus'

  const formJson = reactive({"widgetList":[{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"name","label":"体检套餐名称","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input101969"},{"key":19052,"type":"radio","icon":"radio-field","formItemFlag":true,"options":{"name":"type","label":"体检套类型","labelAlign":"","defaultValue":1,"columnWidth":"200px","size":"","displayStyle":"inline","buttonStyle":false,"border":false,"labelWidth":null,"labelHidden":false,"disabled":false,"hidden":false,"optionItems":[{"label":"男士套餐","value":1},{"label":"女士套餐","value":"0"}],"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"radio12475"},{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"price","label":"体检套餐价格","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input27092"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":"","customClass":[],"functions":"","layoutType":"H5","jsonVersion":3,"onFormCreated":"","onFormMounted":"","onFormDataChange":""}})
  const formData = reactive({})
  const optionData = reactive({})
  const vFormRef = ref(null)


  const addSetmeal = (data) => {
   
   axios({
       url: '/setmeal/addSetmeal',
       method: 'post',
       data: data
   }).then(res => {
       // console.log(res.data)
       goBack()
   }).catch(e => {
       console.log(e)
   })
 }

  const submitForm = () => {
    vFormRef.value.getFormData().then(formData => {
      // Form Validation OK
      addSetmeal(formData)
    }).catch(error => {
      // Form Validation failed
      ElMessage.error(error)
    })
  }

  const goBack = () => {
    router.go(-1)
  }

</script>


<style scoped>

</style>