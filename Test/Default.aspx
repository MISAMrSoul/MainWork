<%@ Page Title="Home Page" Language="VB" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.vb" Inherits="Test._Default" %>

<asp:Content runat="server" ID="FeaturedContent" ContentPlaceHolderID="FeaturedContent">
</asp:Content>
<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent">
    <ext:ResourceManager runat="server" ID="rsmMain" Theme="Gray" />
    <div id="divTestControl">
        <MISA:MISAReferenceLink runat="server" ID="refLinkTest"></MISA:MISAReferenceLink>
       <%-- <ext:HyperLink runat="server" Text="Test hyperlink" NavigateUrl="#"></ext:HyperLink>--%>
        
    </div>
    <ext:Button runat="server" ID="btnTest" />
    <ext:XScript runat="server">
        <script>
            getDynamicID = function () {
                return "xxxx";
            }
        </script>
    </ext:XScript>
</asp:Content>
