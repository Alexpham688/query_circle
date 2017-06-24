function CalculateArea() {
  var radius = Number(document.getElementById("radiusInput").value);
  var paragraph = document.createElement('p');
    paragraph.innerText = "The area is ";
    paragraph.className="areaParagraph";
    document.body.appendChild(paragraph);

  var area = document.createElement("p");
    area.innerText=((radius * 2 ) * Math.PI).toFixed(2);
    document.body.appendChild(area);

  var inputCirle = document.createElement("div");
    inputCirle.setAttribute("id", "difference");
    document.body.appendChild(inputCirle);

    $("#difference").css("background-color","pink");
    $("#difference").css("height", radius * 2 + "px");
    $("#difference").css("width", radius * 2 + "px");
};
