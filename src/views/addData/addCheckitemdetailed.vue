<template>
    <div>
        <div class="header">
            <el-button type="text" @click="goBack">
                <el-icon><ArrowLeft /></el-icon>
            </el-button>
            <h3 class="title">
                添加检查项明细
            </h3>
        </div>
        <p>{{ this.$route.query.ciname }}</p>

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
import { useRouter } from 'vue-router'
 import { ref, reactive } from 'vue'
  import { ElMessage } from 'element-plus'

  const router = useRouter()
//   router.currentRoute.value.query.smid

    const formJson = reactive({"widgetList":[{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"ciname","label":"名称","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input27092"},{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"unit","label":"明细单位","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input96698"},{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"minrange","label":"范围中最小值","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input36227"},{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"maxrange","label":"范围中最大值","labelAlign":"label-left-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input97923"},{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"normalvalue","label":"正常值(非数字型 )","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input99037"},{"key":19052,"type":"radio","icon":"radio-field","formItemFlag":true,"options":{"name":"type","label":"明细类型","labelAlign":"","defaultValue":1,"columnWidth":"200px","size":"","displayStyle":"inline","buttonStyle":false,"border":false,"labelWidth":null,"labelHidden":false,"disabled":false,"hidden":false,"optionItems":[{"label":"数值范围验证型","value":1},{"label":"数值相等验证型","value":2},{"label":"无需验证型","value":3},{"value":4,"label":"描述型"},{"value":5,"label":"其它"}],"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"radio53111"},{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"normalvaluestring","label":"范围说明文字","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input72426"},{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"remarks","label":"备注","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input41035"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":"","customClass":[],"functions":"","layoutType":"H5","jsonVersion":3,"onFormCreated":"","onFormMounted":"","onFormDataChange":""}})
  const formData = reactive({})
  const optionData = reactive({})
  const vFormRef = ref(null)

        const addCheckitemD = (data) => {
            data.cild =  router.currentRoute.value.query.cild
        
            axios({
                url: '/checkitemdetailed/addCheckitemD',
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
         addCheckitemD(formData)
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