import { Controller } from "stimulus";
import transformToNumberFormat from "../services/transformToNumberFormat";

export default class extends Controller {
  static targets = ["output"];

  slideLoanAmount(event) {
    this.outputTarget.textContent = `${transformToNumberFormat(
      event.target.value
    )} €`;
  }
}
