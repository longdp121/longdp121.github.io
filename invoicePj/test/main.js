// $(document).ready(function(){
//     $(document).on("click","#generateAndSavePDF", function(){
//         var myJsPDF = new jsPDF();
        
//         myJsPDF.fromHTML($("body").html());
//         myJsPDF.save("myPDF.pdf");
//     });
// });

function generateAndSavePDF() {
    let doc = new jsPDF();
    let html = document.getElementById("body");
    console.log(html)
    doc.fromHTML(html);
    doc.save("test.pdf")
}