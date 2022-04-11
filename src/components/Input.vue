<template>
    <div>
        <v-text-field
            :type="inputType"
            :label="inputLabel"
            :outlined="outline"
            :dense="dense"
         />
    </div>
</template>

<script>
    export default {
        props:['inputType', 'inputLabel','outline','dense']
        
    }
</script>