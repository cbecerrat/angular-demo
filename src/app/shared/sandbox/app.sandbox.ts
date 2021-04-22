import { Injectable } from '@angular/core';
import { ActiveSession } from 'operations/release-session-library/src/lib/shared/models/ActiveSession';
import { OptionsWrapper } from 'operations/release-session-library/src/lib/shared/models/OptionsWrapper';
import { Session } from 'operations/release-session-library/src/lib/shared/models/Session';

@Injectable({
  providedIn: 'root',
})
export class AppRootSandbox {
  getActiveSessionsInformation(): Session {
    const activeSession = new Session();

    activeSession.customerName = 'Sebastián Sánchez Martinez';
    activeSession.customerId = 'Código de cliente - 2345678';

    const digitalAssets = new OptionsWrapper();
    digitalAssets.label = 'Activo digital';
    digitalAssets.options = ['SuperNet'];
    activeSession.digitalAssets = digitalAssets;

    const operationTypes = new OptionsWrapper();
    operationTypes.label = 'Tipo de operación';
    operationTypes.options = ['Liberación de sesión'];
    activeSession.operationTypes = operationTypes;

    const activeSession_1 = new ActiveSession();
    activeSession_1.digitalAsset = 'SuperNet';
    activeSession_1.state = 'Abierta';
    activeSession.activeSessions = [ activeSession_1 ];

    return activeSession;
  }
}
