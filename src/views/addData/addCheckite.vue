<template>
    <div>
        <div class="header">
            <el-button type="text" @click="goBack">
                <el-icon><ArrowLeft /></el-icon>
            </el-button>
            <h3 class="title">
                添加检查项
            </h3>
        </div>
        <p>{{ this.$route.query.name }}</p>
     

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
// import router from '@/router'
import { useRouter } from 'vue-router'
 import { ref, reactive } from 'vue'
  import { ElMessage } from 'element-plus'

  const router = useRouter()
    const formJson = reactive({"widgetList":[{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"ciname","label":"检查项名称","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input101969"},{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"cicontent","label":"检查项内容","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input27092"},{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"meaning","label":"检查项意义","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input96698"},{"key":66983,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"remarks","label":"备注","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":"","onAppendButtonClick":""},"id":"input6777"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":"","customClass":[],"functions":"","layoutType":"H5","jsonVersion":3,"onFormCreated":"","onFormMounted":"","onFormDataChange":""}})
  const formData = reactive({})
  const optionData = reactive({})
  const vFormRef = ref(null)
  let cild = ref(null)

     const addSetmealdetailed = (data) => {
    
        axios({
            url: '/setmeal/addSetmealdetailed',
            method: 'post',
            data: data
        }).then(res => {
            // console.log(res.data)
            goBack()
        }).catch(e => {
            console.log(e)
        })
    }

    const addCheckite = (data) => {
    
        axios({
            url: '/checkitem/addCheckitem',
            method: 'post',
            data: data
        }).then(res => {
           
           
            let req = {}
            req.cild = res.data.message
            req.smid = router.currentRoute.value.query.smid
            addSetmealdetailed(req)
            // goBack()
        }).catch(e => {
            console.log(e)
        })
    }

    const submitForm = () => {
        vFormRef.value.getFormData().then(formData => {
        // Form Validation OK
        addCheckite(formData)
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