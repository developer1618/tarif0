<template>
    <div class="sm:col-span-2">
        <label :for="id" class="block text-sm font-semibold leading-6 text-white">{{label}}</label>
        <div class="mt-2.5">
        <input type="text" :id="id" 
        :value="modelValue"
        maxlength="12"
        @input="input($event)"
        class="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'InputPhoneComponent',
    props: ['id', 'label', 'modelValue'],
    methods: {
        input(e) {
            e.target.value = e.target.value.replace(/[^\d]/g, '')
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>