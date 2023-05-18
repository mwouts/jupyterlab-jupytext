import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-jupytext extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-jupytext:plugin',
  description: 'A JupyterLab extension for Jupytext',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-jupytext is activated!');
  }
};

export default plugin;
