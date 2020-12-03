
export default {
  continue: "Fortsätta",
  save: "spara",
  update: "uppdatering",
  cancle: "Avbryt",
  delete: "Radera",
  edit: "Redigera",
  noData: "INGEN DATA TILLGÄNGLIG",
  more: "Mer",
  createNew: "+ Skapa ny",
  saveAsItem: "Spara som objekt",
  loading: "Loading... Please wait",
  required: "*indikerar obligatoriska fält",
  link: "/",

  filter: "Filtrera",
  rowsForTable: "Rader per sida:",
  email: "E-post",
  hints: {
    required: "Nödvändig",
    min: "Minst åtta tecken",
    mailNotValid: "Email måste vara giltig",
    wrongMailOrPass: "fel email eller lösenord",
    passMustMatch: "Lösenordet måste matcha",

    successReg: "Registreringsframgång",
    noInternet: "Kontrollera din anslutning",

    again: "Ange ditt nya lösenord igen",
    short: "För kort",
    good: "Accepterad",
    perfect: "Perfekt"
  },

  appBar: {
    personalSettings: { text: "Personliga inställningar", url: '/settings/personal-settings' },
    changeLang: "Byt språk",
    logout: "Logga ut"
  },
  inputsPopup: {
    title: "Psst, vi märkte att ditt konto saknar något:",

    profession: "yrke",
    number: "Personnummer"
  },
  navigationDrewer: {
    invoice: { text: "Fakturor", url: "/invoices" },
    emergency: { text: "Nödsituation Fakturor", url: '/emergency' },
    statistics2: { text: "super statistik", url: '/super-statistics' },
    user: { text: "Användare", url: "/user" },
    customer: { text: "Kunder", url: "/customer" },
    article: { text: "Artiklar", url: "/articles" },
    salary: {
      main: { text: "löner" },
      unpaid: { text: "Obetalda löner", url: "/unpaidsalary" },
      paid: { text: "Betalade löner", url: "/paidsalary" }
    },
    settings: { text: "Inställningar", url: "/settings" },
    statistics: { text: "Statistik", url: "/statistics" }
  },
  loginForm: {
    signIn: "Logga in",
    signUp: "Bli Medlem",
    signInBankId: "Logga BankID",
    signUpBankId: "Bli Medlem BankID",
    link: "/invoices",
    signInOverlay: {
      label: "Hej kompis!",
      text: "Ange dina personuppgifter och börja resa med oss"
    },
    signUpOverlay: {
      label: "Välkommen tillbaka!",
      text: "För att hålla kontakten med oss, logga in med din personliga information"
    },
    email: "e-post",
    password: "Lösenord",
    forgot: "Glömt ditt lösenord?",
    noAcc: "Har du inte konto?",

    signUpForm: {
      label: "Skapa konto",
      fname: "förnamn",
      lname: "efternamn",
      number: "nummer",
      confirmPassword: "bekräfta lösenord",
      checkBox1: "Genom att skapa ett konto godkänner jag ACREDIT Allmänna villkor",
      checkBox2: "Jag godkänner behandlingen av mina personuppgifter i enlighet med ACREDIT Privacy Policy",
      haveAcc: "Har du redan konto?"
    },

    card: {
      text1: "Tack för att du registrerar dig hos oss, ditt konto har skapats",
      text2: "logga in på ditt konto"
    }
  },
  forgetPass: {
    title: "Aterstall losenord",
    text: "Ange din e-postadress du angav nar du skapar ditt konto. En lank för losendorsaterstallning skickas darefter ut till angiven e-postadress.",
    send: "skicka",
    modal: {
      title: "E-postmeddelandet skickades",
      text: "Kontrollera din e-post.",
      login: "Gå till inloggning"
    }
  },
  invoice: {
    breadCampItems: [
      { text: "Fakturering", href: "/invoices" },
      { text: "Fakturor", disabled: true }
    ],
    emergency: 'Nödsituation Fakturor',
    title: "Fakturor",
    newinvoiceBtn: { text: 'Ny faktura', url: "/newinvoice" },
    overdueSection: {
      Overpaid: 'Överbetald (inkl moms)',
      Overdue: 'Försenat (inkl moms)',
      Outstanding: 'Obetalt (inkl moms)',
    },
    table: {
      activeInvoices: "Pågående fakturor",
      allInvoices: "Alla fakturor",
      filters: {
        invoiceTypes: {
          all: " Alla tillstånd",
          draft: "Utkast",
          published: "Publicerad",
          paid: "Betald",
          overdue: "Försenad",
        }
      },
      links: {
        paid: "/invoices/paid/",
        overdue: "/invoices/overdue/",
        draft: "/invoices/draft/",
        published: "/invoices/published/",
      },
      header: {
        no: "Fakturanr",
        customer: "Kund",
        amount: "Belopp (inkl moms)",
        status: "Status",
        doi: "Fakturadatum",
        due: "Förfallodatum",
        delivery: "Leveransstatus"
      }
    }
  },
  oneInvoice: {
    draftLink: "/invoices/draft/",
    breadCampItems: [
      { text: "Fakturor", href: "/invoices" },
      { text: "Faktura nr. " }
    ],
    dropDown: {
      btnText: "Mer",
      amend: "Ändra faktura",
      download: "ladda ner"
    },
    modal: {
      btnText: "Klart",
      undo: {
        title: "Ångra publicera",
        text: "Du kan ångra den senaste publicerade fakturan. Fakturan raderas inte utan sparas som ett utkast.",
        btnText: "Ångra nu"
      },
      undoConfirm: {
        title: "Ångra publicera?",
        text: "Fakturan återgår till utkast. Du kommer då att kunna redigera eller ta bort det.",
      },
      edit: {
        title: "Redigera faktura",
        text: "Fakturan kan redigeras så länge den inte har spelats in.",
        btnText: "Redigera"
      }
    },
    invoiceInfo: {
      dop: "Fakturan är publicerad:",
      amount: "Fakturabelopp (inkl. Moms):"
    },
  },
  newInvoice: {
    linkToInvoice: "/invoices",
    breadCampItems: [
      { text: 'fakturor', href: '/invoices' },
      { text: 'skapa ny faktura', disabled: true }
    ],
    title: "skapa ny faktura", // Skapa en faktura
    customer: {
      title: "Kund:",
      autoPlaceholder: "Sök efter kund",
      customerNO: "Kundnummer:"
    },
    product: {
      title: "Artiklar / tjänster:",
      modal: {
        newRow: "+ Lägg till en ny rad",
        addText: "+ Lägg till text",
        addToInvoice: "Lägg till på fakturan",
        desc: "Beskrivning",
        placeholder: "Sök efter sparat objekt",
        moreEdits: "Redigera mer",

        quantity: "Kvantitet",
        amountVAT: "Belopp exkl. Moms",
        checkBox: {
          label: "",
          hint: "Rot / Rut kommer att redovisas om denna ruta är markerad OCH om du har aktiverat Rot / Rut på fakturan",
        },
        material: {
          typMaterialLable: "Typ av material",
          typMaterialService: "Typ av service",

          materialType: [
            "Child Services",
            "Data and IT services",
            "Removal services",
            "Clothing and textile care",
            "Personal help and care",
            "Repair of appliances",
            "Snow shoveling",
            "Cleaning",
            "Gardening"
          ],
          serviceType: [
            "Child Services",
            "Data and IT services",
            "Removal services",
            "Clothing and textile care",
            "Personal help and care",
            "Repair of appliances",
            "Snow shoveling",
            "Cleaning",
            "Gardening"
          ],
        }
      }
    },
    draggable: {
      name: "artikelnamn",
      vat: "moms",
      amount: "siffra",
      unit: "Enhetspris",
      total: "Totalt (exkl. Skatt)",
      editModal: {
        title: "Redigera produkten",
        selectType: "Välj typ"
      },
      footer: {
        totalSum: "Total summa att betala",
        amountVAT: "Belopp exkl. Moms",
        vat: "moms",
        enableRounded: "Aktivera avrundad summa",
        rounded: "Avrundad summa"
      }
    },
    termSection: {
      title: "Termin",
      interset: "Ränta på försenad betalning",
      delivery: "Leverans",

      hint: {
        days: "dagar",
        daysText: "Antal dagar innan betalningen förfaller.",
        interest: "Ränta på förfallna betalningar",
        interestText: "Det är här du definierar räntan som läggs till när en betalning är försenad. Kom ihåg att du måste skapa en ny faktura med den tillagda räntan och skicka den till din kund. Fakturor med räntor måste också registreras manuellt.",
        deliveryText: "Definiera hur varorna levereras. Lager innebär att kunden tar över risken så snart varorna lämnar lagret."
      },
      modal: {
        overdue: {
          hint: "kommer att visa 13%"
        },
      },
      fromDateText: "Från datum",
      toDateText: "Hittills",
      days: "dagar",
    },
    deliverySection: {
      title: "Leverans metod",
      getMoney: {
        title: "get your money on 1-3 days",
        subtitle: "get your money on 1-3 days",
        text: "get your money on 1-3 days"
      },
      email: {
        title: "E-post till kund",
        subtitle: "Skicka fakturan via e-post.",
        cusEmail: "Skriv kundens e-postadress",
        options: {
          header: "Leveransalternativ för fakturor",
          pdfLink: "Skicka fakturan med en länk till PDF",
          pdfFile: "Skicka fakturan och bifoga PDF-fil"
        },
        sendBtn: "Skicka",
      },

      pdf: {
        title: "Ladda ner PDF",
        subtitle: "Du kan förhandsgranska din faktura innan du publicerar den.",
        btnText: "Förhandsgranska PDF"
      },
      actions: {
        draft: "Spara som utkast",
        publish: "Publicera",
        dAndPublish: "Ladda ner och publicera",
      },
      doneModal: {
        title: "Skapad framgångsrikt",
        text: "Fakturan sparades.",
        visitBtn: "Besök den",
        createBtn: "+ Skapa en ny"
      }
    }
  },
  customer: {
    userModal: {
      title: {
        add: "Lägg till kund",
        edit: "Redigera kund",
      },
      form: {
        radio: {
          person: "individer",
          company: "företag"
        },

        name: {
          nameLabel: "Namn",
          companyLabel: "Företag",
          placeholder: "Kundens fulla namn",
        },
        number: {
          label: "personligt nummer",
          placeholder: "YYYYMMDD-NNNN",
        },
        orgNumber: {
          label: "Org. nummer",
          placeholder: "YYYYMMDD-NNNN"
        },
        vatNumber: "VAT nummer",
        customerNumber: "Customer number",

        postAdress: "postadress",
        zipCode: "postnummer",
        city: "Stad",

        contctInfo: "Kontakta information",
        country: "Land",
        contactPerson: "Kontaktperson",
        email: "E-post",

        terms: "Villkor",
        days: {
          label: "dagar",
          hint: "Antal dagar innan betalning förfaller."
        },
        overdue: {
          label: "Ränta på försenad betalning",
          hint: "Det är här du definierar räntan som läggs till när en betalning är försenad. Kom ihåg att du måste skapa en ny faktura med den tillagda räntan och skicka den till din kund. Fakturor med räntor måste också registreras manuellt."
        },
        delivery: {
          label: "Leverans",
          hint: "Definiera hur varorna levereras. Ex-lager betyder att risken tas över av kunden så snart varorna lämnar lagret."
        }
      }
    },
    breadCampItems: [
      { text: "Fakturering", href: "/invoices" },
      { text: "kunder", disabled: true }
    ],
    title: "kunder",
    newCustomerbtnText: "+ ny kund",
    table: {
      headers: {
        id: "Kundnummer",
        name: "Namn",
        vat: "Summa inkl moms",
        interset: "försenat intresse (%)"
      }
    }
  },
  oneCustomer: {
    breadCampItems: [
      { text: "kunder", href: "/customer" },
      { text: "kund: " }
    ],
    newInvoice: "+ ny faktura",
    dropDown: {
      edit: "Redigera användare",
      delete: "Radera kund",
      download: "Ladda ner data"
    },
    deleteModal: {
      header: "Ta bort kund",
      text: "Är du säker på att du vill ta bort kunden Marika Bengtsson? Detta kan inte göras ogjort!",
      deleteBtn: "Ja, radera",
    },
    customerInfo: {
      type: "Kundtyp",
      orgNumber: "Org-nummer",
      address: "postadress",
      vat: "Momsregistreringsnummer"
    },
  },
  articles: {
    breadCampItems: [
      { text: "Fakturering", href: "/invoices" },
      { text: "Artiklar", disabled: true }
    ],
    header: "Artiklar",
    articleModal: {
      title: {
        btn: "+ Lägg till ny",
        add: "Lägg till artikel",
        edit: "Redigera artikeln"
      },
      form: {
        amountVAT: "Belopp exkl. Moms",
        name: "Artikelnamn",
        code: "Produktkod",
        price: "Pris enhet",
        unit: "Enhet",
        vat: "Moms",
        type: "typ"
      },
      units: [
        "-",
        "hours",
        "pound",
        "pieces",
        "days",
        "months",
        "kilograms",
        "grams",
        "liters",
        "meters",
        "centimeters",
        "millimeters",
        "m²",
        "m³",
        "miles",
        "kms"
      ],
      kind: ["Goods", "services"]
    },
    deleteModal: {
      label: "Radera objekt",
      text: "Är du säker på att du vill ta bort det här objektet?"
    }
  },
  user: {
    title: "användare",
    breadCampItems: [
      { text: "användare", href: '/user' },
      { text: "/", disabled: true }
    ],
    tableHeaders: {
      id: "användar ID",
      name: "namn",
      email: "E-post",
      tel: "Telefon",
      dor: "Registrera datum",
      admin: "Adminroll",
      block: "Blockera användare",
      actions: "Åtgärder"
    },
    adminModal: {
      title: "Adminroll för det här kontot?"
    },
    deleteUser: {
      title: "Är du säker ?"
    },
    block: {
      title: "Blockera den här användaren?"
    },
    editModal: {
      title: "Redigera användare",
      subtitle: "Användarinformation",
      switches: {
        userRole: "Användarroll",
        userBlock: "Användarblock"
      },
      fname: "Förnamn",
      lname: "efternamn",
      tel: "Användartelefon"
    }
  },
  unpaid: {
    title: "Obetald lön",
    link: "/invoices",
    breadCampItems: [
      { text: "Lön", disabled: true },
      { text: "obetald lön", href: '/unpaidsalary' }
    ],
    blueSection: {
      title: "Statistik (senaste 3 månaderna)",
      paidNo: "Obetalt nummer",
      total: "Obetalt summa",
    },
    tableHeaders: {
      state: "stat",
      name: "namn",
      no: "Personnummer",
      ocr: "Ocr-nummer",
      salary: "Lön",
      bank: "Bank",
      action: "Verkan"
    }
  },
  paid: {
    title: "Betald lön",
    link: "/invoices",

    breadCampItems: [
      { text: "Lön", disabled: true },
      { text: "Betald lön", href: '/paidsalary' }
    ],
    blueSection: {
      title: "Statistik (senaste 3 månaderna)",
      paidNo: "Obetalt nummer",
      total: "Obetalt summa",
    },
    tableHeaders: {
      date: "datum",
      name: "namn",
      no: "Personnummer",
      ocr: "Ocr-nummer",
      salary: "Lön",
      bank: "Bank",
      action: "Verkan"
    }
  },
  settings: {
    title: "inställningar",
    cardOne: {
      title: "fakturor",
      link: "/settings/invoice-settings",
      text: "Ställ in standardvärden för fakturavillkor (dagar, ränta på förfallna betalningar, leveransvillkor), valutavrundning, kund- och fakturanummer.",
    },
    cardTwo: {
      title: "Ditt konto",
      items: [
        { text: "Personliga inställningar", link: "/settings/personal-settings" },
        { text: "ändra lösenord", link: "/settings/change-password" },
      ]
    }
  },
  invoiceSettings: {
    breadcrumbItems: [
      { text: "inställningar", href: "/settings" },
      { text: "Fakturainställningar", disabled: true }
    ],
    title: "Fakturainställningar",
    card: {
      title: "Fakturavillkor",
      subtitle: "Ställ in standardfakturevillkor så att du inte behöver ändra det individuellt för varje ny kund.",
      daysLabel: "dagar",
      daysHint: "Antal dagar innan betalningen förfaller.",
      intersetLabel: "Ränta på försenad betalning",
      intersetHint: "Det är här du definierar räntan som läggs till när en betalning är försenad. Kom ihåg att du måste skapa en ny faktura med den tillagda räntan och skicka den till din kund. Fakturor med räntor måste också registreras manuellt.",
      deliveryLabel: "Leverans",
      deliveryHint: "Definiera hur varorna levereras. Ex-lager betyder att risken tas över av kunden så snart varorna lämnar lagret.",
    }
  },
  personalSettings: {
    breadcrumbItems: [
      { text: "inställningar", href: "/settings" },
      { text: "Personliga inställningar", disabled: true }
    ],
    title: "Personliga inställningar",
    card: {
      fname: "Förnamn",
      lname: "Efternamn",
      tel: "telefon",
      address: "adress",
      industry: "industri",
    },
    link: "/invoices"
  },
  changePassword: {
    forgetTitle: "Ställ in nytt lösenord",
    breadcrumbItems: [
      { text: "inställningar", href: "/settings" },
      { text: "ändra lösenord", disabled: true }
    ],
    title: "ändra lösenord",
    card: {
      curPass: "Nuvarande lösenord",
      newPass: "Välj nytt lösenord",
      confNew: "Bekräfta lösenord",
    }
  },
  statistics: {
    header: {
      title: "Intäkter och kostnader",
      income: "Total inkomst",
      expenses: "Totala utgifter"
    },
    income: "inkomst",
    total5: {
      items: {
        title: {
          text: "Topp 5 artiklar",
          url: "/articles",
          urlText: "Visa artiklar"
        },
      },
      customers: {
        title: {
          text: "Topp 5 kunder",
          url: "/customer",
          urlText: "Visa kunder"
        },
      }
    },
    card: {
      title: "Fakturor som är skyldiga dig",
      infos: {
        overdue: "Försenad",
        due: "På grund av idag",
        to_7: "1 -7 dagar",
        to_14: "8-14 dagar",
        to_21: "15-21 dagar",
        plus21: "> 21 dagar",
      },
      actions: {
        btn: { text: "Skapa faktura", url: "/newinvoice" },
        text: { text: "Visa alla aktiva fakturor", url: "/invoices" }
      }
    },
    bottomCards: {
      yearProfit: "I år vinst",
      balance: "Kontosaldo",
      texas: "I år skatter",
      profit: "vinst",
      textable: "Textbar resultatjustering",
      localTax: "Lokal skattesats"
    }
  }
}
