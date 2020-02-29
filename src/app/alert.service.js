class AlertService {
  constructor(){
    this.errorBox = document.getElementById("error");
  }
  handleAdditionError = (inputs, numbers) => {
    const fullMessage = inputs.reduce((message, str, index) => {
      if (inputsAreValid(numbers[index])) {
        return message + "";
      } else {
        return message + `${str} is not a number. `;
      }
    }, "Please enter two valid numbers! ");
  
    this.classList.remove("invisible");
    this.innerText = fullMessage;
  };

  hideErrors = () => {
    this.classList.add("invisible");
  };

}