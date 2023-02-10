<template>
    <div>
      <v-alert
      dense
      text
      type="info"
    >
      {{ this.title }}
    </v-alert>
      <v-simple-table
      fixed-header
      height="300px"
    >
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Price
            </th>
            <th class="text-left">
              Quantity
            </th>
            <th class="text-left total">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in arr"
            :key="index"
          >
            <td>{{ item[0] }}</td>
            <td>{{ item[1] }}</td>
            <td class="total">{{ item[0] * item[1] }} </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    </div>
    
  </template>
  
  
  <script>
    export default {
      props: {
        title: {
          type: String,
          default: 'Нет данных'
        },
        arr: {
          type: Array
        }
      },
      data () {
        return {
          desserts: [
            {
              name: 2,
              calories: 159,
            },
            {
              name: 3,
              calories: 237,
            },
            {
              name: 5,
              calories: 262,
            },
            {
              name: 6,
              calories: 305,
            }
          ],
        }
      },
    }
  </script>

<style lang="css" scoped>
@media all and (max-width: 425px) {
  .total {
    display: none;
  }
}
</style>
  
  