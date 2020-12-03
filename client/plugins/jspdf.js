// import Vue from 'vue';
if (process.client) {

  let jsPDF = require('jspdf');
  require('jspdf-autotable');
  let pdf_link;
  exports.link = pdf_link;
  exports.pdf = function (preview, vm, ocrid) {
    const doc = new jsPDF(),
      start = 20,
      end = 200,
      mid = 105;
    let endOfTitle = 60;

    function header() {
      /** Start The header */
      doc.setFont("times", "italic");
      doc.setFontSize("30");
      doc.setTextColor(51, 104, 130);

      /** TITLE  */
      doc.text("ACREDIT", start, 20);
      doc.setFont("Helvetica", "");
      doc.setFontSize("20");
      doc.setTextColor(0);

      doc.text("FAKTURA", mid + 30, 20, { align: "center" });
      doc.setFontSize("12");
      doc.text(`Konto-/fakturanummer: ${ocrid}`, mid, 25, { align: "left" })
      doc.text(`Utskriftsdatum: ${new Date().toISOString().substr(0, 10)}`, mid, 30, { align: "left" })


      /** Start customer info */
      // doc.text(`Referens: ${vm.$auth.user.name} ${vm.$auth.user.lastname}`, start, endOfTitle);
      doc.setFillColor(0, 0, 0, 33);
      doc.rect(start, endOfTitle - 20, 80, 22, 'f');

      doc.text(`Förfallodag:    ${vm.invoice.dateTo}` || "", start + 5, endOfTitle - 15);
      doc.text(`Fakturabelopp:   ${Number(vm.calculations.totalSumToPay).toFixed(2)} kr ` || "", start + 5, endOfTitle - 10);
      doc.text(`Vår referens:   ${vm.$auth.user.name} ${vm.$auth.user.lastname}` || "", start + 5, endOfTitle - 5);
      if (vm.customer.customername) {
        doc.text(`Er referens:   ${vm.customer.kontaktperson || ''}` || "", start + 5, endOfTitle);
      }

      doc.text(vm.customer.customername || "", mid, endOfTitle - 15);
      doc.text(vm.customer.postadress || "", mid, endOfTitle - 10);
      doc.text(`${vm.customer.postadress2}` || "", mid, endOfTitle - 5);
      if(!vm.customer.postadress2) {
        doc.text(`${vm.customer.postnummer + ','} ${vm.customer.stad + ','} ${vm.customer.country }` || "", mid, endOfTitle -5 );
      } else {
        doc.text(`${vm.customer.postnummer + ','} ${vm.customer.stad + ','} ${vm.customer.country }` || "", mid, endOfTitle);
      }
// Line one ,line 2 ,zip code ,stad, country
      doc.line(start, endOfTitle + 5, end, endOfTitle + 5);
      /*
          doc.autoTable({
            html: '#basic-table',

            margin: { top: endOfTitle + 8, left: start, right: start, bottom: 10 },
            headStyles: { fillColor: "[0, 88, 122]" },
            theme: "plain"
          })


          doc.line(start, endOfTitle + 32, end, endOfTitle + 32);
      */
    }

    // function footer() {
    //   doc.setFontSize(20);

    //   doc.line(20, 265, 190, 265);
    //   doc.text("acredit", 90, 272);

    //   doc.setFontSize(10.0);
    //   doc.text("Godkänd för F-skatt", 85, 276);
    //   doc.line(20, 280, 190, 280);

    //   doc.text("RUDSJÖTERRASSEN 3", 30, 285);
    //   doc.text("136 40 Handen", 35, 290);

    //   doc.text("Org.nr 5590303797", 85, 285);
    //   doc.text("VAT-nummer", 90, 290);
    // }


    function pays(height) {
      console.log('height :', height);
      console.log('endOfTitle :', endOfTitle);
      console.log('all :', height + endOfTitle + 8);

      let startY = height + endOfTitle + 15;



      doc.setFontStyle("bold");

      doc.setFontSize(10);

      doc.text("Belopp exkl. moms", mid + 5, startY);
      doc.text(`${String(vm.calculations.amountExVAT.toFixed(2))} kr`, mid + 60, startY);

      doc.text("Belopp exkl. moms", mid + 5, startY + 5);
      doc.text(`${String((vm.calculations.totalSumToPay - vm.calculations.amountExVAT).toFixed(2))} kr`, mid + 60, startY + 5);

      doc.text("Moms", mid + 5, startY + 10);
      doc.text(`${Number(vm.calculations.totalSumToPay).toFixed(2)} kr`, mid + 60, startY + 10);

      doc.setTextColor(255, 255, 255);

      doc.setFillColor(0, 0, 0, 500);
      doc.rect(mid, startY + 12, end - mid, 8, "f");

      doc.text("fakturabelopp", mid + 5, startY + 17);
      doc.text(`${Number(vm.calculations.totalSumToPay).toFixed(2)} kr`, mid + 60, startY + 17);



      doc.setTextColor(0, 0, 0);

      // let x = startY;
      // if (vm.calculations.vat6) {
      //   doc.text("MOMS 25%", mid, x + 6);
      //   doc.text(`${String(vm.calculations.vat6.toFixed(2))} kr`, mid + 60, x + 6);
      //   x += 6;
      // }

      // if (vm.calculations.vat12) {
      //   doc.text("MOMS 12%", mid, x + 6);
      //   doc.text(`${String(vm.calculations.vat12.toFixed(2))} kr`, mid + 60, x + 6);
      //   x += 6;
      // }

      // if (vm.calculations.vat25) {
      //   doc.text("MOMS 6%", mid, x + 6);
      //   doc.text(`${String(vm.calculations.vat25.toFixed(2))} kr`, mid + 60, x + 6);
      //   x += 6;
      // }


      // doc.text("ÖRESAVRUNDNING", mid, x + 6);
      // doc.text(`${String(vm.calculations.RoundedSum.toFixed(2))} kr`, mid + 60, x + 6);

      // doc.setFillColor(54, 64, 107);
      // doc.rect(start, startY + 25, 170, 6, "f");
      // doc.setTextColor(0, 0, 0);

      // doc.setFontSize(12);
      // doc.text("ANGE REFERENS", start, startY + 36);
      // doc.setFontSize(10);
      // doc.text("<Sätts automatiskt>", start, startY + 41);

      // doc.setFontSize(12);
      // doc.text("TILL BANKGIRO", start + 42, startY + 36);
      // doc.setFontSize(10);
      // doc.text("5124-4093", start + 42, startY + 41);

      // doc.setFontSize(12);
      // doc.text("FÖRFALLODATUM", start + 80, startY + 36);
      // doc.setFontSize(10);
      // doc.text(String(vm.invoice.dateTo), start + 80, startY + 41);

      // doc.setFontSize(12);
      // doc.text("Belopp inkl. moms", start + 125, startY + 36);
      // doc.setFontSize(10);
      // doc.setFontStyle("bold");
      // doc.text(`${vm.calculations.totalSumToPay.toFixed(2)} kr`, 177, startY + 41);

      // doc.setFontSize(12);
      // doc.text("BETALNINGSVILLKOR", start + 124, startY + 50);
      // doc.setFontSize(10);
      // doc.setFontStyle("bold");
      // doc.text(`${vm.invoice.dagar} Dagar`, 177, startY + 56);

    }

    var lol;

    if (vm.draggableItems.length > 19) {
      doc.text("Se fakturaspecifikation på följande sidor", start, 90);
      pays(80);

      doc.addPage();
      let cell = 0, row = 0;
      doc.autoTable({
        html: '#products-table',
        margin: { top: endOfTitle + 8, left: start, right: start, bottom: 120 },
        headStyles: { fillColor: "#aaaaaa" },
        styles: { cellPadding: 0.5, fontSize: 8 },
        theme: "plain",
        // willDrawCell: function (HookData) {
        //   console.log("cell: ", cell,"row: ",row, "%", row/20);
        //   cell++;
        //   row = cell / 4;

        //   if(row >= 20 && Number.isInteger(row/20) ) {
        //     doc.addPage();
        //   }
        //   lol = HookData.table.height;

        // }
      })

      let pagesNo = doc.internal.getNumberOfPages();
      for (let i = 1; i <= pagesNo; i++) {
        doc.setPage(i);
        header();
        footer();
        doc.setFontSize(12);
        doc.text(`Sida: ${i} (${pagesNo})`, mid, 35, { align: "left" })
      }

    } else {
      doc.setFontSize(12);
      doc.text(`Sida: 1 (1)`, mid, 35, { align: "left" })

      header();
      doc.autoTable({
        html: '#products-table',
        margin: { top: endOfTitle + 8, left: start, right: start, bottom: 60 },
        headStyles: { fillColor: "#aaaaaa", textColor: "0" },
        styles: { cellPadding: 0.5, fontSize: 8 },
        theme: "plain",
        pageBreak: "avoid",
        didDrawCell: function (HookData) {
          lol = HookData.table.height;
        }
      })
      pays(lol);

      footer();
    }

    function footer() {
      let endOfPay = 185;

      doc.text("Betalning ska ske till Acredit AB till nedanstående angivet bankgiro.", start, endOfPay);

      doc.setFillColor(0);

      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.6);
      doc.line(start, endOfPay + 3, end, endOfPay + 3);

      doc.setFontSize("10");
      doc.setFontStyle("bold");
      doc.text('Kontaktinformation:', start, endOfPay + 8);
      doc.text('Org. nr / F-skatt:', mid, endOfPay + 8);
      doc.text('Betalningsmottagare:', end, endOfPay + 8, { align: "right" });

      doc.setFontStyle("normal");
      doc.text(`E-post: info@acredit.se`, start, endOfPay + 13);
      doc.text(`559258-4030`, mid, endOfPay + 13);
      doc.text('Acredit AB', end, endOfPay + 13, { align: "right" });

      doc.text(`Hemsida: http://app.acredit.se/`, start, endOfPay + 18);
      doc.setFontStyle("bold");
      doc.text(`Momsreg. nr: ${vm.customer.orgnummer}`, mid, endOfPay + 18);
      doc.setFontStyle("normal");
      doc.text('Bankgiro: 5504-1297', end, endOfPay + 18, { align: "right" });


      doc.text(`Telefon: 08-650 70 70 helgfri vardag 10-12`, start, endOfPay + 23);
      doc.text(`SE559258-403001`, mid, endOfPay + 23);
      doc.text('Hemsida: http://app.acredit.se/', end, endOfPay + 23, { align: "right" });

      doc.line(start, endOfPay + 25, end, endOfPay + 25, "DF");
      doc.addImage(document.getElementById('bankImg'), 'PNG', start, endOfPay + 27, 20, 5);
      doc.text(`INBETALNING/GIRERING AVI`, mid, endOfPay + 32);
      doc.line(start, endOfPay + 33, end, endOfPay + 33, "DF");

      doc.setLineWidth(0.1);
      // doc.strokeRect(mid, endOfPay + 33, end - mid, 10)
      doc.setFontSize("9");

      doc.text('Med denna avi kan du betala på alla bankkontor eller via', start, endOfPay + 38);
      doc.text('* Bankgiro  * Personkonto', start, endOfPay + 43);
      doc.text('* Privatgiro  * Balanskonto', start, endOfPay + 48);
      doc.text('* Sparbanksgiro', start, endOfPay + 53);
      doc.text('Använder du Bankgirots Leverantörsbetalningsrutin (LB)', start, endOfPay + 58);
      doc.text('ange nedanstående referensnr.', start, endOfPay + 61);
      doc.setFontSize("8");
      doc.text('Betalningsavsändare', start, endOfPay + 64);

      doc.setDrawColor(0);
      doc.rect(mid, endOfPay + 34, (end - mid) / 2, 10);
      doc.text("Inbet avgift (ifylls av banken)", mid + 4, endOfPay + 38);

      doc.setFontSize("12");
      doc.setFontStyle("bold");
      doc.text(`${Number(vm.calculations.totalSumToPay).toFixed(2) } kr`, mid + 25, endOfPay + 43, { align: 'center' });

      doc.rect(mid + (end - mid) / 2, (endOfPay + 34), (end - mid) / 2, 10);

      doc.setFont("helvetica");
      doc.setFontSize("25");
      doc.setFontStyle("bold");
      doc.text("OCR", mid + (end - mid) / 2 + 4, endOfPay + 43);


      doc.setFontSize("11");
      doc.setFontStyle("normal");
      doc.text(vm.customer.customername || "", start, endOfPay + 69);
      doc.text(vm.customer.postadress || "", start, endOfPay + 74);
      doc.text(`${vm.customer.postadress2}` || "", start, endOfPay + 79);
      if(!vm.customer.postadress2) {
        doc.text(`${vm.customer.postnummer + ','} ${vm.customer.stad + ','} ${vm.customer.country }` || "", start, endOfPay + 79 );
      } else {
        doc.text(`${vm.customer.postnummer + ','} ${vm.customer.stad + ','} ${vm.customer.country }` || "", start, endOfPay + 84);
      }

      // doc.text(vm.customer.customername || "", start, endOfPay + 73);
      // doc.text(vm.customer.postadress || "", start, endOfPay + 78);
      // doc.text(vm.customer.kontaktperson  || "", start, endOfPay + 83);

      doc.setFontSize("9");
      doc.text('Från bankgironr (vid girering)', start, endOfPay + 88);

      doc.rect(mid, endOfPay + 83, (end - mid) / 2, 10);
      doc.rect(mid + (end - mid) / 2, (endOfPay + 83), (end - mid) / 2, 10);

      doc.text('Till bankgironr', mid + 4, endOfPay + 87);
      doc.text('Betalningsmottagare', mid + 4 + (end - mid) / 2, endOfPay + 87);
      doc.setFontSize("11");
      doc.text('5504-1297', mid + 4, endOfPay + 91);
      doc.text('Acredit AB', mid + 4 + (end - mid) / 2, endOfPay + 91);

      doc.setFontSize("7");
      doc.setFontStyle("bold");
      doc.line(start, endOfPay + 93, end, endOfPay + 93);
      doc.text('VAR GOD GÖR INGA ÄNDRINGAR', start, endOfPay + 96)
      doc.text('MEDDELANDEN KAN INTE LÄMNAS PÅ AVIN', mid, endOfPay + 96, { align: 'center' })
      doc.text('MEDDELANDEN KAN INTE LÄMNAS PÅ AVIN', end, endOfPay + 96, { align: 'right' })
      doc.line(start, endOfPay + 97, end, endOfPay + 97);

      doc.setFontStyle("normal");
      doc.text("Referensnr", start, endOfPay + 100);


      doc.line(mid - 15, endOfPay + 97, mid - 15, endOfPay + 101);
      doc.text("Kronor", mid - 13, endOfPay + 100);

      doc.text(`${Math.trunc(Number(vm.calculations.totalSumToPay).toFixed(2))}`, mid - 13, endOfPay + 105);

      doc.line(mid, endOfPay + 97, mid, endOfPay + 101);
      doc.text("öre", mid + 2, endOfPay + 100);

      doc.text(`${Math.trunc( (Number(vm.calculations.totalSumToPay).toFixed(2) % 1).toFixed(2) * 100) }`, mid + 2, endOfPay + 105);

      doc.line(mid + 15, endOfPay + 97, mid + 15, endOfPay + 101);

      doc.setFontSize("7");
      doc.setFont('courier',"bolditalic");
      doc.text('#', start, endOfPay + 105)
      doc.text('1010306344837 #', start + 40, endOfPay + 105)
      doc.text('>', mid + 20, endOfPay + 105)
      doc.text('55041297#41#', end, endOfPay + 105, { align: 'right' })
    }



    if (!!preview) {
      console.log(vm.customer);

      // console.log(lol + endOfTitle + 15 + 17 + 10);

      // doc.save(`${ocrid}.pdf`);
      doc.output('dataurlnewwindow');

      return;
    } else {
      const pdf = new File([doc.output("blob")], `${ocrid}.pdf`, { type: "pdf" }),
        data = new FormData();

      data.append("file", pdf);

      return { data, doc }
    }
  }
}
