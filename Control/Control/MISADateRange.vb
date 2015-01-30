Public Class MISADateRange
    Inherits Ext.Net.ComponentBase


    Public Overrides ReadOnly Property XType As String
        Get
            Return "MISADateRange"
        End Get
    End Property

    Public Overrides ReadOnly Property InstanceOf As String
        Get
            Return "MISA.Control.DateRange"
        End Get
    End Property

    Public Overrides ReadOnly Property ResourceItems As List(Of Ext.Net.ClientResourceItem)
        Get
            Return MyBase.ResourceItems
        End Get
    End Property

End Class
