<template>
  <div class="file-upload">
    <input type="file" @change="onFileChange"/>    
    <button @click="onUploadFile" class="upload-button" :disabled="!this.selectedFile">
      Bild hochladen
    </button>
  </div> 
</template>

<script>

export default({
  data () {
    return {
    }
  },
  props: ['onFileChange', 'onUploadFile', 'selectedFile'],
})
</script>
