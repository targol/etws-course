// scripts.js

function showComponentInfo(component) {
  let infoText = "";
  switch (component) {
    case "cbc":
      infoText = `
        <h3>Cell Broadcast Center (CBC)</h3>
        <p>The CBC is responsible for creating and sending out the ETWS messages to the network. It processes the message and then transmits it to the Mobile Management Entity (MME) for further delivery.</p>
      `;
      break;
    case "mme":
      infoText = `
        <h3>Mobile Management Entity (MME)</h3>
        <p>The MME is responsible for handling ETWS messages in LTE networks. It takes messages from the CBC and forwards them to the eNodeB for transmission to UEs in the affected area.</p>
      `;
      break;
    case "enodeb":
      infoText = `
        <h3>eNodeB / gNodeB</h3>
        <p>These are the base stations in LTE/5G networks that broadcast the ETWS messages to UEs (User Equipment). They ensure that the alerts reach all mobile devices within the area affected by the disaster.</p>
      `;
      break;
    case "ue":
      infoText = `
        <h3>User Equipment (UE)</h3>
        <p>The User Equipment (UE) receives the ETWS message. The message can trigger an audible alarm, vibration, and/or a visual notification on the device depending on the severity of the warning.</p>
      `;
      break;
    default:
      infoText = "<p>Click on a component to learn more about it.</p>";
  }
  document.getElementById("component-info").innerHTML = infoText;
}
