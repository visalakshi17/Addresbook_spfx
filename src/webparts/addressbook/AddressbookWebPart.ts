import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
//import { IReadonlyTheme } from '@microsoft/sp-component-base';

import * as strings from 'AddressbookWebPartStrings';
import Addressbook from './components/Addressbook';
//import { IAddressbookProps } from './components/IAddressbookProps';

export interface IAddressbookWebPartProps {
  description: string;
}

export default class AddressbookWebPart extends BaseClientSideWebPart<IAddressbookWebPartProps> {

  public render(): void {
    const element: React.ReactElement = React.createElement(
      Addressbook,
      // {
      //   description: this.properties.description,
      //   isDarkTheme: this._isDarkTheme,
      //   environmentMessage: this._environmentMessage,
      //   hasTeamsContext: !!this.context.sdks.microsoftTeams,
      //   userDisplayName: this.context.pageContext.user.displayName
      // }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
