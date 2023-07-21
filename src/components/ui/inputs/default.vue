<template>
    <div class="sm:col-span-2">
        <label :for="id" class="block text-sm font-semibold leading-6 text-white">{{label}}</label>
        <div class="mt-2.5">
        <input type="text" :id="id" 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="block w-full rounded-md border-0 bg-white/5 py-2 px-3.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'InputComponent',
    props: ['id', 'label', 'modelValue']
}
</script>