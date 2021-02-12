<template>
  <div class="imr-form">
    <FormulateInput
      label="Favorite B10 football team?"
      :type="type"
      name="team"
      :options="{
        nebraska: 'Nebraska',
        ohiost: 'Ohio St.',
        michigan: 'Michigan',
      }"
      value="nebraska"
      error-behavior="live"
      validation="required|matches:nebraska"
      validation-name="Team name"
    />
    <FormulateInput
      label="Favorite B10 football team?"
      :type="type"
      name="team"
      :options="{
        nebraska: 'Nebraska',
        ohiost: 'Ohio St.',
        michigan: 'Michigan',
      }"
      value="nebraska"
      error-behavior="live"
      validation="required|matches:nebraska"
      validation-name="Team name"
    />
    <FormulateInput
      label="Favorite B10 football team?"
      :type="type"
      name="team"
      :options="{
        nebraska: 'Nebraska',
        ohiost: 'Ohio St.',
        michigan: 'Michigan',
      }"
      value="nebraska"
      error-behavior="live"
      validation="required|matches:nebraska"
      validation-name="Team name"
    />
    <FormulateInput
      type="file"
      name="file"
      label="Select your documents to upload"
      help="Select one or more PDFs to upload"
      validation="mime:application/pdf"
      multiple
    />
    <FormulateInput
      type="datetime-local"
      name="sample"
      label="Sample datetime-local input"
      placeholder="Sample datetime-local placeholder"
      help="Sample datetime-local help text"
      validation="required"
    />
    <FormulateInput
  type="number"
  name="sample"
  label="Sample number input"
  placeholder="Sample number placeholder"
  help="Sample number help text"
  validation="required|number|between:10,20"
  min="0"
  max="100"
  error-behavior="live"
/>
<FormulateInput
  type="search"
  name="sample"
  label="Sample search input"
  placeholder="Sample search placeholder"
  help="Sample search help text"
/>

  </div>
</template>

<script>
export default {
  name: "Form",
};
</script>
