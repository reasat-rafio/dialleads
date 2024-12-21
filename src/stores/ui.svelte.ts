class UI {
  setSomething:unknown = null;

  setSomethingValue(value:unknown) {
    this.setSomething = value;
  }
}
const uiStates = new UI();
export default uiStates;