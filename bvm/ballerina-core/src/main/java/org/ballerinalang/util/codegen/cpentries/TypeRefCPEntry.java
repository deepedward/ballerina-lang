/*
*  Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
*
*  WSO2 Inc. licenses this file to you under the Apache License,
*  Version 2.0 (the "License"); you may not use this file except
*  in compliance with the License.
*  You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing,
*  software distributed under the License is distributed on an
*  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
*  KIND, either express or implied.  See the License for the
*  specific language governing permissions and limitations
*  under the License.
*/
package org.ballerinalang.util.codegen.cpentries;

import org.ballerinalang.model.types.BType;

import java.util.Objects;

/**
 * {@code TypeCPEntry} represents a Ballerina type in the constant pool.
 *
 * @since 0.88
 */
public class TypeRefCPEntry implements ConstantPoolEntry {

    private int typeSigCPIndex;
    private String typeSig;

    // Index to a valid name index in the constant pool
    private BType type;

    public TypeRefCPEntry(int typeSigCPIndex, String typeSig) {
        this.typeSigCPIndex = typeSigCPIndex;
        this.typeSig = typeSig;
    }

    public int getTypeSigCPIndex() {
        return typeSigCPIndex;
    }

    public String getTypeSig() {
        return typeSig;
    }

    public BType getType() {
        return type;
    }

    public void setType(BType type) {
        this.type = type;
    }

    @Override
    public EntryType getEntryType() {
        return EntryType.CP_ENTRY_TYPE_REF;
    }

    @Override
    public int hashCode() {
        return Objects.hash(type.toString());
    }

    @Override
    public boolean equals(Object obj) {
        return obj instanceof TypeRefCPEntry && typeSig.equals(((TypeRefCPEntry) obj).typeSig);
    }
}
