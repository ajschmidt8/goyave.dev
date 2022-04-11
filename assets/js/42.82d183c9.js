(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{481:function(a,t,e){"use strict";e.r(t);var s=e(34),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"localization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#localization"}},[a._v("#")]),a._v(" Localization")]),a._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#introduction"}},[a._v("Introduction")])]),e("li",[e("a",{attrs:{href:"#writing-language-files"}},[a._v("Writing language files")]),e("ul",[e("li",[e("a",{attrs:{href:"#fields"}},[a._v("Fields")])]),e("li",[e("a",{attrs:{href:"#locale"}},[a._v("Locale")])]),e("li",[e("a",{attrs:{href:"#rules"}},[a._v("Rules")])]),e("li",[e("a",{attrs:{href:"#overrides"}},[a._v("Overrides")])])])]),e("li",[e("a",{attrs:{href:"#using-localization"}},[a._v("Using localization")]),e("ul",[e("li",[e("a",{attrs:{href:"#placeholders"}},[a._v("Placeholders")])]),e("li",[e("a",{attrs:{href:"#localization-reference"}},[a._v("Localization reference")])])])])])]),e("p"),a._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),e("p",[a._v("The Goyave framework provides a convenient way to support multiple languages within your application. Out of the box, Goyave only provides the "),e("code",[a._v("en-US")]),a._v(" language.")]),a._v(" "),e("h2",{attrs:{id:"writing-language-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-language-files"}},[a._v("#")]),a._v(" Writing language files")]),a._v(" "),e("p",[a._v("Language files are stored in the "),e("code",[a._v("resources/lang")]),a._v(" directory.")]),a._v(" "),e("pre",{staticClass:"vue-container"},[e("code",[e("p",[a._v(".\n└── resources\n   └── lang\n       └── en-US ("),e("em",[a._v("language name")]),a._v(")\n           ├── fields.json ("),e("em",[a._v("optional")]),a._v(")\n           ├── locale.json ("),e("em",[a._v("optional")]),a._v(")\n           └── rules.json ("),e("em",[a._v("optional")]),a._v(")")]),a._v("\n")])]),e("p",[a._v("Each language has its own directory and should be named with an "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes",target:"_blank",rel:"noopener noreferrer"}},[a._v("ISO 639-1"),e("OutboundLink")],1),a._v(" language code. You can also append a variant to your languages: "),e("code",[a._v("en-US")]),a._v(", "),e("code",[a._v("en-UK")]),a._v(", "),e("code",[a._v("fr-FR")]),a._v(", "),e("code",[a._v("fr-CA")]),a._v(", ... "),e("strong",[a._v("Case is important.")])]),a._v(" "),e("p",[a._v("Each language directory contains three files. Each file is "),e("strong",[a._v("optional")]),a._v(".")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("fields.json")]),a._v(": field names translations and field-specific rule messages.")]),a._v(" "),e("li",[e("code",[a._v("locale.json")]),a._v(": all other language lines.")]),a._v(" "),e("li",[e("code",[a._v("rules.json")]),a._v(": validation rules messages.")])]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("All directories in the "),e("code",[a._v("resources/lang")]),a._v(" directory are automatically loaded when the server starts.")])]),a._v(" "),e("h3",{attrs:{id:"fields"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fields"}},[a._v("#")]),a._v(" Fields")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("fields.json")]),a._v(" file contains the field names translations and their rule-specific messages. Translating field names helps making more expressive messages instead of showing the technical field name to the user. Rule-specific messages let you override a validation rule message for a specific field.")]),a._v(" "),e("p",[e("strong",[a._v("Example:")])]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"email"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"email address"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"rules"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"required"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"You must provide an :field."')]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("p",[a._v("This "),e("code",[a._v("fields.json")]),a._v(" file will change the validation message of the "),e("code",[a._v("required")]),a._v(" validation rule to "),e("code",[a._v("You must provide an email address")]),a._v(".")]),a._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("Learn more about validation messages placeholders in the "),e("RouterLink",{attrs:{to:"/v3/guide/basics/validation.html"}},[a._v("validation")]),a._v(" section.")],1)]),a._v(" "),e("h3",{attrs:{id:"locale"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#locale"}},[a._v("#")]),a._v(" Locale")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("locale.json")]),a._v(" file contains all language lines that are not related to validation. This is the place where you should write the language lines for your user interface or for the messages returned by your controllers.")]),a._v(" "),e("p",[e("strong",[a._v("Example:")])]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"product.created"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The product have been created with success."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"product.deleted"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The product have been deleted with success."')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("It is a good practice to use "),e("strong",[a._v("dot-separated")]),a._v(" names for language lines to help making them clearer and more expressive.")])]),a._v(" "),e("h3",{attrs:{id:"rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rules"}},[a._v("#")]),a._v(" Rules")]),a._v(" "),e("p",[a._v("The "),e("code",[a._v("rules.json")]),a._v(" file contains the validation rules messages. These messages can have "),e("strong",[e("RouterLink",{attrs:{to:"/v3/guide/basics/validation.html#placeholders"}},[a._v("placeholders")])],1),a._v(", which will be automatically replaced by the validator with dynamic values. If you write custom validation rules, their messages shall be written in this file.")]),a._v(" "),e("p",[e("strong",[a._v("Example:")])]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"integer"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The :field must be an integer."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"starts_with"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The :field must start with one of the following values: :values."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"same"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The :field and the :other must match."')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("h4",{attrs:{id:"type-dependent-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type-dependent-rules"}},[a._v("#")]),a._v(" Type-dependent rules")]),a._v(" "),e("p",[a._v("The following rules have "),e("strong",[a._v("type-dependent")]),a._v(" messages. That means that their message is different depending on the type of the validated data.")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("min")])]),a._v(" "),e("li",[e("code",[a._v("max")])]),a._v(" "),e("li",[e("code",[a._v("size")])]),a._v(" "),e("li",[e("code",[a._v("greater_than")])]),a._v(" "),e("li",[e("code",[a._v("greater_than_equal")])]),a._v(" "),e("li",[e("code",[a._v("lower_than")])]),a._v(" "),e("li",[e("code",[a._v("lower_than_equal")])]),a._v(" "),e("li",[e("code",[a._v("between")])])]),a._v(" "),e("p",[a._v("Type-dependent rules must have a language line for the four following types:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("string")])]),a._v(" "),e("li",[e("code",[a._v("numeric")])]),a._v(" "),e("li",[e("code",[a._v("array")])]),a._v(" "),e("li",[e("code",[a._v("file")])])]),a._v(" "),e("p",[e("strong",[a._v("Example:")])]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"min.string"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The :field must be at least :min characters."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"min.numeric"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The :field must be at least :min."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"min.array"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The :field must have at least :min items."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"min.file"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The :field must be at least :min KiB."')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("h4",{attrs:{id:"array-validation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#array-validation"}},[a._v("#")]),a._v(" Array validation")]),a._v(" "),e("p",[a._v("Each rule, except the file-related rules and the "),e("code",[a._v("confirmed")]),a._v(" rule, can be used to validate array values. If a rule is used to validate an array value and doesn't pass, the rule message "),e("code",[a._v("validation.rules.<rule_name>.array")]),a._v(" (or "),e("code",[a._v("validation.rules.<rule_name>.<type>.array")]),a._v(" if the rule is type-dependent) is returned.")]),a._v(" "),e("p",[e("strong",[a._v("Example:")])]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"min.string.array"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The :field values must be at least :min characters."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"min.numeric.array"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The :field values must be at least :min."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"min.array.array"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The :field values must have at least :min items."')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"digits.array"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"The :field values must be digits only."')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("h3",{attrs:{id:"overrides"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overrides"}},[a._v("#")]),a._v(" Overrides")]),a._v(" "),e("p",[a._v("If you define the "),e("code",[a._v("en-US")]),a._v("  language in your application, the default language lines will be overridden by the ones in your language files, and all the undefined ones will be kept.")]),a._v(" "),e("p",[a._v("It is possible to load a language directory manually from another location than the stardard "),e("code",[a._v("resources/lang")]),a._v(" using the "),e("code",[a._v("lang.Load()")]),a._v(" function. If the loaded language is already available in your application, the newly loaded one will override the previous in the same manner.")]),a._v(" "),e("h2",{attrs:{id:"using-localization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-localization"}},[a._v("#")]),a._v(" Using localization")]),a._v(" "),e("p",[a._v("When an incoming request enters your application, the core language middleware checks if the "),e("code",[a._v("Accept-Language")]),a._v(" header is set, and set the "),e("code",[a._v("goyave.Request")]),a._v("'s "),e("code",[a._v("Lang")]),a._v(" attribute accordingly. Localization is handled automatically by the validator.")]),a._v(" "),e("p",[a._v("To use the localization feature, import the "),e("code",[a._v("lang")]),a._v(" package:")]),a._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"goyave.dev/goyave/v3/lang"')]),a._v("\n")])])]),e("p",[a._v("The main function of the localization feature is "),e("code",[a._v("lang.Get(language, line string)")]),a._v(". This function lets you retrieve a language entry.")]),a._v(" "),e("p",[a._v("For validation rules and attributes messages, use the following dot-separated paths:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("validation.rules.<rule_name>")])]),a._v(" "),e("li",[e("code",[a._v("validation.rules.<rule_name>.string")])]),a._v(" "),e("li",[e("code",[a._v("validation.rules.<rule_name>.numeric")])]),a._v(" "),e("li",[e("code",[a._v("validation.rules.<rule_name>.array")])]),a._v(" "),e("li",[e("code",[a._v("validation.rules.<rule_name>.file")])]),a._v(" "),e("li",[e("code",[a._v("validation.fields.<field_name>")])]),a._v(" "),e("li",[e("code",[a._v("validation.fields.<field_name>.<rule_name>")])])]),a._v(" "),e("p",[a._v('For normal lines, just use the name of the line. Note that if you have a line called "validation", it won\'t conflict with the dot-separated paths. If the line cannot be found, or the requested language is not available, the function will return the exact '),e("code",[a._v("line")]),a._v(" attribute.")]),a._v(" "),e("p",[e("strong",[a._v("Example:")])]),a._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("func")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ControllerHandler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("response "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("goyave"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" request "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("goyave"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    response"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("String")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("StatusOK"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" lang"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Lang"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"my-custom-message"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("h3",{attrs:{id:"placeholders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#placeholders"}},[a._v("#")]),a._v(" Placeholders")]),a._v(" "),e("p",[e("Badge",{attrs:{text:"Since v2.10.0"}})],1),a._v(" "),e("p",[a._v("Language lines can contain "),e("strong",[a._v("placeholders")]),a._v(". Placeholders are identified by a colon directly followed by the placeholder name:")]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"greetings"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Greetings, :username!"')]),a._v("\n")])])]),e("p",[a._v("The last parameter of the "),e("code",[a._v("lang.Get()")]),a._v(" method is a variadic associative slice of placeholders and their replacement. In the following example, the placeholder "),e("code",[a._v(":username")]),a._v(" will be replaced with the Name field in the user struct.")]),a._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[a._v("lang"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"en-US"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"greetings"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('":username"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// "Greetings, Taylor!"')]),a._v("\n")])])]),e("p",[a._v("You can provide as many as you want:")]),a._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[a._v("lang"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"en-US"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"greetings-with-date"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('":username"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('":day"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Monday"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// "Greetings, Taylor! Today is Monday"')]),a._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("When a placeholder is given, "),e("strong",[a._v("all occurrences")]),a._v(" are replaced.")]),a._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[a._v('"popular"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('":product are very popular. :product sales exceeded 1000 last week."')]),a._v("\n")])])]),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[a._v("lang"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"en-US"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"popular"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('":product"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Lawnmowers"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// "Lawnmowers are very popular. Lawnmowers sales exceeded 1000 last week."')]),a._v("\n")])])])]),a._v(" "),e("h3",{attrs:{id:"localization-reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#localization-reference"}},[a._v("#")]),a._v(" Localization reference")]),a._v(" "),e("div",{staticClass:"table"},[e("p",[e("a",{attrs:{href:"#lang-get"}},[a._v("Get")]),a._v(" "),e("a",{attrs:{href:"#lang-load"}},[a._v("Load")]),a._v(" "),e("a",{attrs:{href:"#lang-isavailable"}},[a._v("IsAvailable")]),a._v(" "),e("a",{attrs:{href:"#lang-getavailablelanguages"}},[a._v("GetAvailableLanguages")]),a._v(" "),e("a",{attrs:{href:"#lang-detectlanguage"}},[a._v("DetectLanguage")])])]),e("h4",{attrs:{id:"lang-get"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lang-get"}},[a._v("#")]),a._v(" lang.Get")]),a._v(" "),e("p",[a._v("Get a language line.")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parameters")]),a._v(" "),e("th",[a._v("Return")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("code",[a._v("lang string")])]),a._v(" "),e("td",[e("code",[a._v("string")])])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("line string")])]),a._v(" "),e("td")]),a._v(" "),e("tr",[e("td",[e("code",[a._v("placeholders ...string")])]),a._v(" "),e("td")])])]),a._v(" "),e("p",[e("strong",[a._v("Example:")])]),a._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[a._v("fmt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("lang"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"en-US"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"my-custom-message"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// "my message"')]),a._v("\nfmt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("lang"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"en-US"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"validation.rules.greater_than.string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// "The :field must be longer than the :other."')]),a._v("\nfmt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("lang"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"en-US"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"validation.fields.email"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// "email address"')]),a._v("\nfmt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("lang"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"en-US"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"greetings"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('":username"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// "Greetings, Taylor!"')]),a._v("\n")])])]),e("h4",{attrs:{id:"lang-load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lang-load"}},[a._v("#")]),a._v(" lang.Load")]),a._v(" "),e("p",[a._v("Load a language directory.")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parameters")]),a._v(" "),e("th",[a._v("Return")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("code",[a._v("language string")])]),a._v(" "),e("td",[e("code",[a._v("void")])])]),a._v(" "),e("tr",[e("td",[e("code",[a._v("path string")])]),a._v(" "),e("td")])])]),a._v(" "),e("p",[e("strong",[a._v("Example:")])]),a._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[a._v("lang"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Load")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zh"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/path/to/chinese-lang"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("h4",{attrs:{id:"lang-isavailable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lang-isavailable"}},[a._v("#")]),a._v(" lang.IsAvailable")]),a._v(" "),e("p",[a._v("Returns true if the language is available.")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parameters")]),a._v(" "),e("th",[a._v("Return")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("code",[a._v("lang string")])]),a._v(" "),e("td",[e("code",[a._v("bool")])])])])]),a._v(" "),e("p",[e("strong",[a._v("Example:")])]),a._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[a._v("fmt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("lang"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("IsAvailable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"zh"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// true")]),a._v("\n")])])]),e("h4",{attrs:{id:"lang-getavailablelanguages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lang-getavailablelanguages"}},[a._v("#")]),a._v(" lang.GetAvailableLanguages")]),a._v(" "),e("p",[a._v("Returns a slice of all loaded languages.")]),a._v(" "),e("p",[a._v("This can be used to generate different routes for all languages supported by your applications such as:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("/en/products\n/fr/produits\n...\n")])])]),e("table",[e("thead",[e("tr",[e("th",[a._v("Parameters")]),a._v(" "),e("th",[a._v("Return")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("code",[a._v("lang string")])]),a._v(" "),e("td",[e("code",[a._v("bool")])])])])]),a._v(" "),e("p",[e("strong",[a._v("Example:")])]),a._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[a._v("fmt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("lang"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("GetAvailableLanguages")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// [en-US zh]")]),a._v("\n")])])]),e("h4",{attrs:{id:"lang-detectlanguage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lang-detectlanguage"}},[a._v("#")]),a._v(" lang.DetectLanguage")]),a._v(" "),e("p",[a._v('DetectLanguage detects the language to use based on the given lang string.\nThe given lang string can use the HTTP "Accept-Language" header format.')]),a._v(" "),e("ul",[e("li",[a._v("If "),e("code",[a._v("*")]),a._v(" is provided, the default language will be used.")]),a._v(" "),e("li",[a._v("If multiple languages are given, the first available language will be used, and if none are available, the default language will be used.")]),a._v(" "),e("li",[a._v('If no variant is given (for example "en"), the first available variant will be used.')])]),a._v(" "),e("p",[a._v("For example, if "),e("code",[a._v("en-US")]),a._v(" and "),e("code",[a._v("en-UK")]),a._v(" are available and the request accepts "),e("code",[a._v("en")]),a._v(", "),e("code",[a._v("en-US")]),a._v(" will be used.")]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("Parameters")]),a._v(" "),e("th",[a._v("Return")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[e("code",[a._v("lang string")])]),a._v(" "),e("td",[e("code",[a._v("string")])])])])]),a._v(" "),e("p",[e("strong",[a._v("Example:")])]),a._v(" "),e("div",{staticClass:"language-go extra-class"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[a._v("fmt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("Println")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("lang"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("DetectLanguage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"en, fr-FR;q=0.9"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// "en-US"')]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);