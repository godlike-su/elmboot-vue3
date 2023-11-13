<template>
    <div>
        <div class="header">
            <el-button type="text" @click="goBack">
                <el-icon><ArrowLeft /></el-icon>
            </el-button>
            <h3 class="title">
                添加医院
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

  const formJson = reactive({"widgetList":[{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"name","label":"医院名称","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input36531"},{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"telephone","label":"医院电话","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input78193"},{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"address","label":"医院地址","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input63197"},{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"businesshours","label":"营业时间","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input18679"},{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"deadline","label":"采血截止时间","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input10968"},{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"rule","label":"预约人数规则","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input19857"},{"key":19052,"type":"radio","icon":"radio-field","formItemFlag":true,"options":{"name":"state","label":"医院状态","labelAlign":"","defaultValue":1,"columnWidth":"200px","size":"","displayStyle":"inline","buttonStyle":false,"border":false,"labelWidth":null,"labelHidden":false,"disabled":false,"hidden":false,"optionItems":[{"label":"正常","value":1},{"label":"其他","value":2}],"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"radio22693"},{"key":52796,"type":"picture-upload","icon":"picture-upload-field","formItemFlag":true,"options":{"name":"picture","label":"医院图片","labelAlign":"","labelWidth":null,"labelHidden":false,"columnWidth":"200px","disabled":false,"hidden":false,"required":true,"requiredHint":"","customRule":"","customRuleHint":"","uploadURL":"http://localhost:8088/uploadFile","uploadTip":"","withCredentials":false,"multipleSelect":false,"showFileList":true,"limit":1,"fileMaxSize":5,"fileTypes":["jpg","jpeg","png"],"customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onBeforeUpload":"","onUploadSuccess":"","onUploadError":"","onFileRemove":"","onValidate":""},"id":"pictureupload34331"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":"","customClass":[],"functions":"","layoutType":"H5","jsonVersion":3,"onFormCreated":"","onFormMounted":"","onFormDataChange":""}})
  const formData = reactive({})
  const optionData = reactive({})
  const vFormRef = ref(null)

  const addHosp = (data) => {
   
    axios({
        url: '/hospital/addHospital',
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
     
    //   alert( JSON.stringify(formData) )
        
        let req = {}
        req = formData
        req.picture = formData.picture[0].response.message
        addHosp(req)
       
       
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