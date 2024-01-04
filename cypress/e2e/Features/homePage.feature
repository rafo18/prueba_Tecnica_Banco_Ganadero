Feature:  Listado de datos de contacto GanaMóvil Empresa

  Scenario:  Listar datos de contacto GanaMóvil Empresa
    Given Dado que Ingresé al portal web www.bg.com.bo
    When Cuando Ingreso al menú Negocios|Menu hamburguesa|GanaMóvil Empresas 
    And Y busco los datos de contacto
    Then Entonces obtengo un listado con el
          | Contacto |           Data                       |
          | Teléfono | 800-10-3999                          |
          | WhatsApp | (+591)-721-03001                     |
          | Email    | bancoganadero@bg.com.bo              |
          | Horarios | 07:00 a 22:00 Hrs. (Lunes a Domingo) |