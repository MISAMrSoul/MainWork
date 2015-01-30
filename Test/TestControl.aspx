<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="TestControl.aspx.vb" Inherits="Test.TestControl" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="Scripts/Ext/ExtOverride.js" type="text/javascript"></script>
</head>
<body>
    <form id="form1" runat="server">
        <ext:ResourceManager runat="server" ScriptMode="Development" />
        <div>
            <MISA:MISATagField runat="server" ID="tagMain" Width="200" Height="50">
            </MISA:MISATagField>
            <ext:Button runat="server" ID="btnTest">
                <DirectEvents>
                    <Click OnEvent="Unnamed_Event" />
                </DirectEvents>
            </ext:Button>
        </div>
    </form>
</body>
</html>
