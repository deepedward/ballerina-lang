/**
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { MenuConstants } from '@ballerina-lang/composer-core';
import { MENUS, COMMANDS, LABELS } from './constants';

import LaunchManager from './LaunchManager';
import DebugManager from './DebugManager';

/**
 * Provides menu definitions of debugger plugin.
 *
 * @returns {Object[]} menu definitions.
 *
 */
export function getMenuDefinitions(debuggerInstance) {
    return [
        {
            id: MENUS.DEBUG_MENU,
            label: LABELS.DEBUG,
            isActive: () => {
                return true;
            },
            icon: '',
            order: 21,
            type: MenuConstants.MENU_DEF_TYPES.ROOT,
        },
        {
            id: MENUS.RUN_START_MENU,
            parent: MENUS.DEBUG_MENU,
            label: 'Run',
            isActive: (appContext) => {
                const activeEditor = debuggerInstance.appContext.editor.getActiveEditor();
                return activeEditor && activeEditor.definition &&
                    activeEditor.definition.id === 'composer.editor.ballerina' && !LaunchManager.active;
            },
            command: COMMANDS.RUN,
            icon: 'start',
            type: MenuConstants.MENU_DEF_TYPES.ITEM,
        },
        {
            id: MENUS.DEBUG_START_MENU,
            parent: MENUS.DEBUG_MENU,
            label: 'Debug',
            isActive: (appContext) => {
                const activeEditor = debuggerInstance.appContext.editor.getActiveEditor();
                return activeEditor && activeEditor.definition &&
                    activeEditor.definition.id === 'composer.editor.ballerina' && !DebugManager.active;
            },
            command: COMMANDS.RUN_WITH_DEBUG,
            icon: 'bug',
            type: MenuConstants.MENU_DEF_TYPES.ITEM,
        },
    ];
}